const express = require("express");
const Eureka = require("eureka-js-client").Eureka;
const axios = require("axios");

// example configuration
const client = new Eureka({
  instance: {
    app: 'microserviceA',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/',
    port: {
      '$': 3000,
      '@enabled': 'true',
    },
    vipAddress: 'http://localhost:3000/',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
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
  res.status(200).json({ message: "Welcome to Microservice A" });
});

app.get("/microb", (req, res) => {
  const microBInfo = client.getInstancesByAppId("microserviceB");
  axios.get(microBInfo[0].vipAddress).then(({data}) => {
    res.status(200).json({ content: data, microbinfo: microBInfo });
  }).catch(console.log);
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);

});
