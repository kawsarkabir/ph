const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    full_name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    username: "janedoe",
    email: "jane@example.com",
    full_name: "Jane Doe",
    age: 28,
  },
  {
    id: 3,
    username: "user123",
    email: "user@example.com",
    full_name: "User One",
  },
  {
    id: 4,
    username: "avidreader",
    email: "reader@example.com",
    full_name: "Book Lover",
    age: 35,
    interests: ["Reading", "Hiking", "Cooking"],
  },
  {
    id: 5,
    username: "gamerguy",
    email: "gamer@example.com",
    full_name: "Gamer X",
    age: 22,
  },
];

app.get("/", (req, res) => {
  res.send("user managment server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server in running on port ${port}`);
});
