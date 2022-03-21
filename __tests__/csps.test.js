// const eventEmitter = require('../events-pool')
const io = require("socket.io")(3000);
const caps = io.of("/caps")


describe('using spies to test logger methods ',()=>{
    let payload = {}

    let consoleSpy;
   

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    })

    afterAll(()=>{
        consoleSpy.mockRestore();
    })


    it('testingpickup',async()=>{
        caps.emit('pickup',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('testing in-transiet',async()=>{
        caps.emit('in-transit',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('testing delivered',async()=>{
        caps.emit('delivered',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

})