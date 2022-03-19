const eventEmitter = require('./events-pool')
require ('./apps/driver');
require('./apps/vendor');



setInterval(()=>{
  eventEmitter.emit('event', 'store name as a parameter');
},5000);