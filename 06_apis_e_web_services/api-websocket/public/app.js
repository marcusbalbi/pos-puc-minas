const sendButton = document.querySelector("#send");
const closeConnectionButton = document.querySelector("#close");
const messageBox = document.querySelector("#message");
const reicevedMessages = document.querySelector("#reicevedMessages");
let socket = null;
window.onload = () => {
  socket = new WebSocket("ws://localhost:9099");

  socket.onopen = () => {
    console.log("connection opened!");
    sendButton.className = sendButton.className
      .split(" ")
      .filter((name) => name !== "disabled")
      .join(" ");
    closeConnectionButton.className = closeConnectionButton.className
      .split(" ")
      .filter((name) => name !== "disabled")
      .join(" ");
    socket.onmessage = (message) => {
      console.log("new message", message);
      const element = document.createElement("div");
      element.className = "item";
      element.innerHTML = `
          <i class="large chevron circle down middle aligned icon green"></i>
          <div class="content">
            <div class="header">Message Received!</div>
            <div class="description">${message.data}</div>
          </div>`;
      reicevedMessages.appendChild(element);
    };
  };
};

sendButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (socket) {
    socket.send(messageBox.value);
    messageBox.value = "";
  }
});

closeConnectionButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (socket) {
    send.className = send.className.concat(" disabled");
    closeConnectionButton.className =
      closeConnectionButton.className.concat(" disabled");
    socket.close();
  }
});
