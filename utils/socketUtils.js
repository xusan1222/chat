const socketIO = require("socket.io");

exports.sio = (server) => {
  return socketIO(server, {
    transports: ["polling"],
    cors: {
      origin: "*",
    },
  });
};

exports.connection = (io) => {
  io.on("connection", (socket) => {

     socket.on("chat", (data) => {
      io.sockets.emit('chat',data)
      console.log(`chat data  : ${JSON.stringify(data)}`);
    });


    // socket.on("message", (message) => {
    //   console.log(`message from ${socket.id} : ${message}`);
    // });
   

    // socket.on("disconnect", () => {
    //   console.log(`socket ${socket.id} disconnected`);
    // });
  });
};