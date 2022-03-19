const eventEmitter = require("../events-pool");
// on
eventEmitter.on("in-transit", (payload) => {
  const globalEvent = {
    event: "in-transit",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", globalEvent);
});

eventEmitter.on("delivered", (payload) => {
  const globalEvent = {
    event: "delivered",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", globalEvent);
});

eventEmitter.on("pickup", (payload) => {
  const globalEvent = {
    event: "pickup",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", globalEvent);

  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);

    eventEmitter.emit("in-transit", payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delievered ${payload.orderId}`);
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
    eventEmitter.emit("delivered", payload);
  }, 3000);
});
