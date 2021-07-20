const sendButton = document.querySelector("#send");
const closeConnectionButton = document.querySelector("#close");
const messageBox = document.querySelector("#message");
let socket = null;
window.onload = () => {
  socket = new WebSocket("ws://localhost:9099");

  socket.onopen = () => {
    console.log("connection opened!");

    socket.onmessage = (message) => {
      console.log("new message", message);
    };
  };
};

sendButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (socket) {
    socket.send(messageBox.value);
    messageBox.value = "";
  }

})
