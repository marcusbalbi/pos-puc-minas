const Todo = require("../models/Todo");

const TodoService = {
  async getAllTodos () {
    return Todo.find({});
  },
  async add (title, description) {
    Todo.create({title, description, finished: false})
  }
}

module.exports = TodoService;