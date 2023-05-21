const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { UserRouter } = require("./routes/users");
const { DoubtRouter } = require("./routes/doubts");
const { EventRouter } = require("./routes/events");
const { answerRouter } = require("./routes/answers");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Ping");
});

app.use("/auth", UserRouter);
app.use("/doubts", DoubtRouter);
app.use("/events", EventRouter);
app.use("/answers", answerRouter);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@academichelper.s62gccd.mongodb.net/myacademichelper?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
