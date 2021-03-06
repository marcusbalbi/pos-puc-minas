const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  finished: {
    type: Boolean,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todos", todoSchema);