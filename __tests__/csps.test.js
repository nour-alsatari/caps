const eventEmitter = require('../events-pool')


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
        eventEmitter.emit('pickup',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('testing in-transiet',async()=>{
        eventEmitter.emit('in-transit',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('testing delivered',async()=>{
        eventEmitter.emit('delivered',payload);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

})