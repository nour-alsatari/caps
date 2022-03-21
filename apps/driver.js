// const eventEmitter = require("../events-pool");
// on
const io = require ('socket.io-client');
// let socket = io.connect('http://localhost:3000')
let caps = io.connect("http://localhost:3000/caps")
// socket is listening .on for any events in the server .emit 

caps.on('test', ()=> {
  console.log('testing connection to caps')
})

caps.on("in-transit", (payload) => {
  const globalEvent = {
    event: "in-transit",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", globalEvent);
});

caps.on("delivered", (payload) => {
  const globalEvent = {
    event: "delivered",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", globalEvent);
});

caps.on("pickup", (payload) => {
  const globalEvent = {
    event: "pickup",
    time: new Date(),
    payload: payload,
  }; 
  console.log("EVENT:", globalEvent);

  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);

    caps.emit("in-transit", payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delievered ${payload.orderId}`);
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
    caps.emit("delivered", payload);
  }, 3000);
});
