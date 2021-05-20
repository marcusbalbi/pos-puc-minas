const supplier = require("./supplier");
const circuitBreaker = require("./circuit-breaker");
const consumer = require("./consumer");

const httpServer = supplier(3000);
circuitBreaker(3001, "http://localhost:3000");
consumer(500);

// httpServer.on("close", () => {
//   setTimeout(() => {
//     httpServer.listen(3000);
//   }, 1000);
// });

// setInterval(() => {
//   httpServer.close();
// }, 2000);
