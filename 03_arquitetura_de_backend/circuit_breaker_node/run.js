const supplier = require("./supplier");
const circuitBreaker = require("./circuit-breaker");
const consumer = require("./consumer");

supplier();
circuitBreaker();

consumer();
