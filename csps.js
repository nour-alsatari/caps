// const eventEmitter = require('./events-pool')
// require ('./apps/driver');
// require('./apps/vendor');

const io = require("socket.io")(3000);
const caps = io.of("/caps")
// emits to each sokect

caps.on("connection", (socket) => {
  socket.on("test", () => {
    console.log("youre connected to caps");
  });

  // io.of("/caps").in("room1").emit("joinedRoom", socket.id); // trigger event in a room // broadcast mesg
socket.on('pickup', (payload) => {
  socket.emit('delivered', payload)
  caps.emit('pickup', payload); // emit to all sockets using caps (the server) not the socket(the client)

})

socket.on("in-transit", (payload) => {
  caps.emit('in-transit', payload);
});

socket.on("delivered", (payload)=> {
  caps.emit('delivered', payload);
});

  
  
}); // specific namespace


io.on ('connection', (socket)=> {
  console.log("you're connected to global")
// socket.emit("pickup"); // boadcast == emit -- sockets will be listening for this boadcast using on

socket.on("join", () => {
  socket.join("room1");
});

socket.on("venderJoined", () => {
  io.to("room1").emit("joinedRoom", socket.id); // trigger event in a room // broadcast mesg
  io.to("room1").emit("in-transit"); // trigger event in a room // broadcast mesg
  io.to("room1").emit("delivered");
});

})

// io.on ('connection', (socket)=> {
// console.log("you're connected to the server");

// setInterval(()=>{
//   socket.emit('event', 'store name as a parameter');
// },5000);

// socket.on('eventHandler', (payload)=> {
// // console.log(payload)
// socket.emit('pickup', payload)

// });

// })

// setInterval(()=>{
//   eventEmitter.emit('event', 'store name as a parameter');
// },5000);
