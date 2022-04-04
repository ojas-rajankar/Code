const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const Post = require("./models/Post");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const postRoute = require("./routes/post");
app.use("/posts", postRoute);

mongoose.connect(process.env.DB_URL, () => console.log("Connected To DB"));

app.post("/register", (req, res) => {
  const post = new Post({
    address: req.body.address,
    token: req.body.token
  });
  console.log(req.body.token)

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

app.get("/getuser", (req, res) => {
  res.send({ message: "Hello" });
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => console.log("Server ready"));
