const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// mongoDB connect config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvlfmu8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// own midleware
const varifyToken = async (req, res, next) => {
  const token = req?.cookies?.token;
  console.log("inside in middlewarew token value", token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
  });
  next();
};

async function run() {
  const serviceCollection = client.db("carDoctor").collection("services");
  const checkOutFormCollection = client
    .db("carDoctor")
    .collection("checkOutForm");

  // jwt related api
  app.post("/jwt", async (req, res) => {
    const user = req.body;
    console.log("token for user", user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  });
  
  app.post("/logOutWithclearCookie", async (req, res) => {
    const user = req.body;
    res.clearCookie("token", { maxAge: 0 }).send({ success: true });
  });








  // get all data with get methods
  app.get("/services", async (req, res) => {
    res.send(await serviceCollection.find().toArray());
  });

  // get single id data with params id query
  app.get("/services/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const options = {
      projection: { title: 1, img: 1, price: 1 },
    };
    res.send(await serviceCollection.findOne(query, options));
  });

  // post with checkout form data
  app.post("/checkout", async (req, res) => {
    const checkout = req.body;
    res.send(await checkOutFormCollection.insertOne(checkout));
  });
  // update
  app.patch("/checkout/:id", async (req, res) => {
    const checkout = req.body;
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: {
        status: updateDoc.status,
      },
    };
  });

  app.get("/checkout", varifyToken, async (req, res) => {
    console.log("owner info ", req.user);
    if (req.user?.email !== req.query?.email) {
      return res.status(403).send({ message: "forbidden" });
    }
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }
    res.send(await checkOutFormCollection.find(query).toArray());
  });

  app.delete("/checkout/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    res.send(await checkOutFormCollection.deleteOne(query));
  });

  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.json("car doctor is comming here.........");
});

app.listen(port, (req, res) => {
  console.log(`car doctor is running ${port}`);
});
