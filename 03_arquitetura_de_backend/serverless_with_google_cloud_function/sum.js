require("dotenv").config("./.env");
const axios = require("axios");

console.log("executando funcao em google cloud");

const n1 = process.argv[2] || 0;
const n2 = process.argv[3] || 0;
console.log(`Realizando a some de ${n1} e ${n2}`);
axios
  .get(`${process.env.BASE_URL}`, { params: { n1, n2 } })
  .then((response) => {
    console.log("O resultado é " + response.data.result);
    console.log("Header Info", response.headers);
  });
