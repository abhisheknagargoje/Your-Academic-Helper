const express = require("express");
const router = express.Router();
const answerModel = require("../models/answers");

router.get("/:id", async (req, res) => {
  try {
    const response = await answerModel.find({ doubtId: req.params.id });
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

module.exports.answerRouter = router;
