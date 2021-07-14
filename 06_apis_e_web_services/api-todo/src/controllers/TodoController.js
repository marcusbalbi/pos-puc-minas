const TodoService = require("../services/TodoService");

const TodoController = {
  get: async (req, res) => {
    try {
      const todo = await TodoService.get(req.params.id);
      if (!todo) {
        return res
          .status(404)
          .json({ message: "There is no Todo with this id!" });
      }
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const todos = await TodoService.getAllTodos();
      if (!todos || todos.length == 0) {
        return res.status(404).json({ message: "There is no Todo yet!" });
      }
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  add: async (req, res) => {
    try {
      const { title, description } = req.body;
      const id = await TodoService.add(title, description);
      res.status(201).json({ message: `Todo Created ID: ${id} ` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: (req, res) => {},
  delete: (req, res) => {},
};

module.exports = TodoController;
