const express = require("express");
const mongoose = require("mongoose");
const achSchema = require("./models/schema");

const app = express();
app.use(express.json());

app.get("/:githubId", async (req, res) => {
  const githubId = req.params.githubId;
  // MongoDB stuff
  const doc = await achSchema.where({ _id: githubId }).findOne();
  if (!doc) {
    return res.status(404).send("Not found");
  }
  res.send(doc);
});

app.post("/", async (req, res) => {
  // MongoDB stuff
  let doc = await achSchema.findOne({ _id: githubId });
  if (!doc) {
    doc = new achSchema({ _id: githubId });
  }
  doc.favouritePlaylist.addToSet(...playlist);
  await doc?.save();
  console.log(req.body);
  res.send();
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
