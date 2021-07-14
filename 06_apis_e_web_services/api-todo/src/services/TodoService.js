const Todo = require("../models/Todo");

const TodoService = {
  async get(id) {
    const todo = await Todo.findById(id).catch((err) => {
      console.log(err.message);
    });

    if (!todo) {
      return null;
    }

    return {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      date: todo.date,
      finished: todo.finished,
    };
  },
  async getAllTodos() {
    const todos = await Todo.find({});
    return todos.map((todo) => {
      return {
        id: todo._id,
        title: todo.title,
        description: todo.description,
        date: todo.date,
        finished: todo.finished,
      };
    });
  },
  async add(title, description) {
    const todo = await Todo.create({ title, description, finished: false });

    return todo._id;
  },

  async update(id, data) {
    const todo = await Todo.findByIdAndUpdate(id, data);

    return TodoService.get(id);
  },
  async remove(id) {
    return Todo.findByIdAndDelete(id);
  },
};

module.exports = TodoService;
