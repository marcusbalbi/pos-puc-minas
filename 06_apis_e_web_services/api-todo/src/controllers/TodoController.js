const TodoService = require("../services/TodoService");

const TodoController = {
  get: (req, res) => {},
  getAll: async (req, res) => {
    const todos = await TodoService.getAllTodos();
    res.json(todos);
  },
  add: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};

module.exports = TodoController;
