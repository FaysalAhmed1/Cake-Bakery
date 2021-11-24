const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yutpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//console.log(uri); check

//client.connect((err) => {
// const collection = client.db("test").collection("devices");
// perform actions on the collection object
// client.close();
//});

async function run() {
  try {
    await client.connect();

    const database = client.db("cake_bakery");
    const appointmentCollection = database.collection("appointments");

    //User collection
    const usersCollection = database.collection("users");
    const cakesCollection = database.collection("cakes");
    const reviewCollection = database.collection("reviews");

    app.get("/appointments", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = appointmentCollection.find(query);
      const appointments = await cursor.toArray();

      res.json(appointments);
    });

    /// app.get("/appointments", async (req, res) => {
    // const cursor = appointmentCollection.find({});
    //  const reviews = await cursor.toArray();
    //  res.send(reviews);
    // });

    app.post("/appointments", async (req, res) => {
      const appointment = req.body;

      const result = await appointmentCollection.insertOne(appointment);
      console.log(result);
      res.json(result);
    });

    // Adding Cakes
    app.post("/cakes", async (req, res) => {
      const cake = req.body;

      const result = await cakesCollection.insertOne(cake);
      console.log(result);
      res.json(result);
    });

    // Adding Review
    app.post("/reviews", async (req, res) => {
      const cake = req.body;

      const result = await reviewCollection.insertOne(cake);
      console.log(result);
      res.json(result);
    });

    // Getting review
    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find({});
      const reviews = await cursor.toArray();
      res.send(reviews);
    });

    // Getting Cakes
    app.get("/cakes", async (req, res) => {
      const cursor = cakesCollection.find({});
      const cakes = await cursor.toArray();
      res.send(cakes);
    });

    //Getting one Cake

    app.get("/cakes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const cake = await cakesCollection.findOne(query);
      res.json(cake);
    });

    // Deleting cakes

    app.delete("/cakes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await cakesCollection.deleteOne(query);
      res.json(result);
    });

    //getting personal cake order

    app.post("/users", async (req, res) => {
      const user = req.body;

      const result = await usersCollection.insertOne(user);

      res.json(result);
    });
    //Deleting Order
    app.delete("/appointments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await appointmentCollection.deleteOne(query);
      res.json(result);
    });

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = { $set: user };
      const result = await usersCollection.UpdateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    app.put("/users/admin", async (req, res) => {
      const user = req.body;

      const filter = { email: user.email };
      const updateDoc = { $set: { role: "admin" } };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.json(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Dumb!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
