const mongoose = require("mongoose");

const database = {
  init () {
    mongoose
      .connect("mongodb://root:secret@mongodb:27017", {
        useNewUrlParser: true,
        dbName: "todos"
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
