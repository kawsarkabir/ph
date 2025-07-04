const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// midddleware
app.use(cors());
app.use(express.json());

//  connet to mongoDB here ist mongodb config
const uri =
  "mongodb+srv://devkawsarkabir:QQPXSEAjzOnj8sub@cluster0.hvlfmu8.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userCollection = client.db("insertDB").collection("users");

    app.get("/users", async (req, res) => {
      res.send(await userCollection.find().toArray());
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.put('/users/:id', async(req, res)=>{
        const id = req.params.id;
        const user = req.body;
        console.log(id, user);
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true}
        const updated = {
            $set:{
                name: user.name, 
                email: user.email
            }
        }
        const result = await userCollection.updateOne(filter, updated, options)
        res.send(result)
    })

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("delete this items on database ", id);
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("simple crud operation ! comminggg");
});

app.listen(port, () => {
  console.log("running crud operation running !!!!!");
});
