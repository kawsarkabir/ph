const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//midware
app.use(cors());
app.use(express.json());

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

    const userCollection = client.db("usersDB").collection("users");

    app.get("/users", async (req, res) => {
      res.send(await userCollection.find().toArray());
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      res.send(await userCollection.insertOne(user));
    });

    app.delete('/users/:id', async(req, res)=>{
        const id = req.params.id
        console.log('delete this items from database',id);
        const query = {_id: new ObjectId(id)}
        res.send(await userCollection.deleteOne(query))
    })

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
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("simple crud in running");
});
app.listen(port, () => {
  console.log(`server runing on ${port}`);
});
