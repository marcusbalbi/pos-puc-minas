const express = require("express");
module.exports = (port) => {
  const app = express();
  app.get("/resource", (req, res) => {
    res.json({ message: "Supplier response ok!" });
  });
  return app.listen(port, () => {
    console.log("Supplier Rodando na porta " + port);
  });
};
