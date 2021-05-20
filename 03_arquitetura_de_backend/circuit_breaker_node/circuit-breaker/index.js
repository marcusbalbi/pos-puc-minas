const express = require("express");
const axios = require("axios");

const supplierURL = "http://localhost:3000";
module.exports = () => {
  const app = express();
  app.get("/resource", async (req, res) => {
    const { data } = await axios.get(`${supplierURL}/resource`);

    res.json(data);
  });
  app.listen(3001, () => {
    console.log("Circuit Breaker Rodando na porta 3001");
  });
};
