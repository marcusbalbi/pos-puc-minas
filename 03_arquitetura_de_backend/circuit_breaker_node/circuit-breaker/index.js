const express = require("express");
const axios = require("axios");
let count = 0;
module.exports = (port, {supplierURL, openCircuitCount, closeCircuitCount}) => {
  const app = express();
  openCircuitCount = openCircuitCount || 10
  closeCircuitCount = closeCircuitCount || 15;
  app.get("/resource", async (req, res) => {
    if (count >= openCircuitCount) {
      if (count >= closeCircuitCount) {
        count = 0;
      }
      count++;
      return res.status(200).json({ message: "Circuit Open!", count });
    } else {
      axios
        .get(`${supplierURL}/resource`)
        .then(({ data }) => {
          count++;
          res.status(200).json(data);
        })
        .catch((e) => {
          res
            .status(200)
            .json({ message: "Falha na Comunicação com Supplier:" + e.message });
        });
    }
  });
  app.listen(port, () => {
    console.log("Circuit Breaker Rodando na porta " + port);
  });
};
