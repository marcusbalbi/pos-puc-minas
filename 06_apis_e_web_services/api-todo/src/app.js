const express = require("express");
const morgan = require("morgan");

const indexRoutes = require("./routes/index");
const todoRoutes = require("./routes/todo");

const app = express();

app.use(morgan(":method :url :status :response-time ms"));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/todos", todoRoutes);

module.exports = app;
