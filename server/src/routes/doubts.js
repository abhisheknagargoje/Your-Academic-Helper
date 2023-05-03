const express = require("express");
const router = express.Router();
const doubtModel = require("../models/doubts");

router.get("/", async (req, res) => {
  try {
    const response = await doubtModel.find({});
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  const { title, content, authorId, answered, votes, subject, unit } = req.body;
  const newDoubt = new doubtModel({
    title,
    content,
    authorId,
    answered,
    votes,
    subject,
    unit,
  });
  await newDoubt.save();

  res.json({ message: "New doubt created Successfully!" });
});

module.exports.DoubtRouter = router;
