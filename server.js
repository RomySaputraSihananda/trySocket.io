const { Socket } = require("dgram");
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("chat", (message) => {
    socket.broadcast.emit("newChat", message);
  });
});

server.listen(4000);
