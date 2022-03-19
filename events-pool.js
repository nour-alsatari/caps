// Implement a Module for a Global Event Pool.

const Events = require ('events');
const eventEmitter = new Events ();

module.exports = eventEmitter;