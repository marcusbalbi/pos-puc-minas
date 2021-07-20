const express = require("express");
const ws = require("ws");

const app = express();

const wss = new ws.Server({ port: 9099 });

app.use("/", express.static("./public"));

wss.on("connection", (ws) => {
  console.log("Websocket opened on 9099");
  ws.on("message", (data) => {
    console.log(`message received`, data);
    setTimeout(() => {
      ws.send(`delayed data: ${data}`);
    }, 1000);
  });
});

app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
