const faker = require ('@faker-js/faker')
const eventEmitter = require('../events-pool');




  
  // you can do .on and inside .on you can .emit another thing
  // .on {
  //   .emit
  // }
  // conclusion: i NEED to have on before emit so can emit work

  eventEmitter.on('event', (storeName)=> {
    const orderData = {
      store: storeName,
      orderId: faker.faker.datatype.uuid(),
      customer: faker.faker.name.findName(),
      address: faker.faker.address.streetAddress()
    }
    eventEmitter.emit('pickup', orderData);

    

  })

  eventEmitter.on ('delivered', (payload)=> {
    console.log(`Thank you ${payload.customer}`)
  })
  


 
