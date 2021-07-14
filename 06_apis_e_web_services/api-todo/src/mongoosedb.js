const mongoose = require("mongoose");

const database = {
  init () {
    mongoose
      .connect("mongodb://mongodb:27017/todos", {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Banco conectado com sucesso");
      })
      .catch((e) => {
        console.log("falha na conexao com Mongodb: " + e.message);
      });
  }
}

module.exports = database;
