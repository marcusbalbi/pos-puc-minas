const supplier = require("./supplier");
const circuitBreaker = require("./circuit-breaker");
const consumer = require("./consumer");

const httpServer = supplier(3000);
circuitBreaker(3001, {
  supplierURL: "http://localhost:3000",
  openCircuitCount: Infinity,
  closeCircuitCount: Infinity,
});
consumer(500);

httpServer.on("close", () => {
  setTimeout(() => {
    httpServer.listen(3000);
  }, 2000);
});

setInterval(() => {
  const lottery = Math.floor(Math.random() * 100);
  if (lottery < 10 && httpServer.listening) {
    console.log("Close Server, Lottery:", lottery);
    httpServer.close();
  }
}, 1000);
