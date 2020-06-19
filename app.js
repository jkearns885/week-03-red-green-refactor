

module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel'
    },
    smallTruck: {
        engineSize: 6,
        fuelType: 'regular'
    },

    calculateVehicleRating: function (vehicle) {
        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 8;
                break;
            case 5:
            case 6:
                rating = 6;
                break;
            case 7:
            case 8:
                rating = 4;
                break;
            default:
                rating = 0;
        }
        if (vehicle.fuelType == 'diesel') {
            rating = rating + 2;
        }
        return rating;
    }

};



