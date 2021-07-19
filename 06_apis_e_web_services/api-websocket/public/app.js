window.onload = () => {
  const socket = new WebSocket("ws://localhost:9099");

  socket.onopen = () => {
    console.log("connection opened!");

    socket.onmessage = (message) => {
      console.log("new message", message);
    };

    socket.send("OLA MUNDO!");
  };
};
