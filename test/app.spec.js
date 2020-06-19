// use this library so we can test our code
const assert = require('assert');

//reference our app code so we can test it
// does not exist yet
const app = require('../app.js');

describe('Vehicle Rating Calculator', function () {
    it('calculate a rating of 10 for a car with 4 cylinders and diesel fuel', function () {
        const smallCar = app.smallCar;
        const rating = app.calculateVehicleRating(smallCar);
        assert.equal(rating, 10);
    });

    it('calculate a rating of 6 for a truck with 6 cylinders and regular fuel', function () {
        const smallTruck = app.smallTruck;
        const rating = app.calculateVehicleRating(smallTruck);
        assert.equal(rating, 6);

    });
})
