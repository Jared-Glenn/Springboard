//Not working. myVehicle is not defined, somehow.
describe("Classes test", function() {
    beforeEach(function() {
        let myVehicle = new Vehicle("Hyundai", "Sonata", "2000");
    });
    
    it('should create a base vehicle', function() {
        expect(myVehicle.make).toEqual("Hyundai");
    });
    
    afterEach(function() {
        delete myVehicle;
    });
})
