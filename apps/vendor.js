const faker = require("@faker-js/faker");
// const eventEmitter = require('../events-pool');
const io = require("socket.io-client");
let socket = io.connect("http://localhost:3000");
let caps = io.connect("http://localhost:3000/caps");
// socket is listening on

caps.emit("test");
socket.emit("join");

socket.emit("venderJoined");

socket.on("joinedRoom", (id) => {
  console.log(`vendor ${id} joined the room`);
});

// you can do .on and inside .on you can .emit another thing
// .on {
//   .emit
// }
// conclusion: i NEED to have on before emit so can emit work

// socket.on('event', (storeName)=> {
// const orderData = {
//   store: 'storeName',
//   orderId: faker.faker.datatype.uuid(),
//   customer: faker.faker.name.findName(),
//   address: faker.faker.address.streetAddress()
// }
// console.log(orderData);
setInterval(() => {
  const orderData = {
    store: "storeName",
    orderId: faker.faker.datatype.uuid(),
    customer: faker.faker.name.findName(),
    address: faker.faker.address.streetAddress(),
  };
  caps.emit("pickup", orderData);
}, 5000);

// })

caps.on("delivered", (payload) => {
  console.log(`Thank you for delivering ${payload.orderId}`);
});
