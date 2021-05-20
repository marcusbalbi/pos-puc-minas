const express = require("express");
const Eureka = require("eureka-js-client").Eureka;

// example configuration
const client = new Eureka({
  instance: {
    app: "microserviceB",
    hostName: "microserviceb",
    ipAddr: "127.0.0.1",
    statusPageUrl: "http://localhost:4000/",
    port: {
      $: 4000,
      "@enabled": "true",
    },
    vipAddress: "http://microserviceb:4000/",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: "eureka",
    port: 8761,
    servicePath: "/eureka/apps/",
  },
});

client.start();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ "message": "Welcome to Microservice B" });
});

app.listen(4000, () => {
  console.log(`Server started on 4000`);
});
