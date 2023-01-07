const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const login = require("./Routers/router.js")

require("dotenv").config();

DB_KEY = process.env.MONGO_KEY;

app.use(cors());
app.use(express.json());
app.use(login);

const uri = `mongodb+srv://Test123:${DB_KEY}@cluster0.ujggnnh.mongodb.net/Omok?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", function (req, res) {
  console.log(req.body.username, req.body.password, req.body.confirmPass);
  res.end();
});

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
