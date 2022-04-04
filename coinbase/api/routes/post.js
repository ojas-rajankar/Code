const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", (req, res) => {
  const post = new Post({
    address: req.body.address,
    token: req.body.token
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
