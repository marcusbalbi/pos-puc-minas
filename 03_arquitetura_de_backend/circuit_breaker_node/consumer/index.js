const axios = require("axios");

const circuitBreakerURL = "http://localhost:3001";

module.exports = (speedMs) => {
  setInterval(() => {
    axios
      .get(`${circuitBreakerURL}/resource`)
      .then(({ data }) => {
        console.log("Resposta do Circuit Breaker: ", data);
      })
      .catch((e) => {
        console.error("Falha no Circuit Breaker: ", e.message);
      });
  }, speedMs || 1000);
};
