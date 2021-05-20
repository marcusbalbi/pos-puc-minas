const express = require("express");
module.exports = () => {
  const app = express();
  app.get("/resource", (req, res) => {
    res.json({ message: "Supplier response ok!" });
  });
  app.listen(3000, () => {
    console.log("Supplier Rorando na porta 3000");
  });
};
