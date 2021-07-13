const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan(":method :url :status :response-time ms"));
app.use(express.json());

app.get('/', (req, res) => {
  res.json("poi!");
})

module.exports = app;
