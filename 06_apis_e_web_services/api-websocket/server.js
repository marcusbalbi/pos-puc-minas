const express = require("express");
const http = require("http");
const ws = require("ws");

const app = express();

const wss = new ws.Server({ port: 9099 });

wss.on("connection", (ws) => {
  console.log("Websocket opened on 9099")
  ws.on("message", (data) => {
    console.log(`message received`, data);
    ws.send(data);
  });
});


app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
