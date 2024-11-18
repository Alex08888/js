class Cars {
    constructor(model, producer, yearOfBuild, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfBuild = yearOfBuild;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

    }
    drive() {
        console.log(`we driving car ${this.maxSpeed} km/h`);
    };


    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(increasedSpeed) {
        if (increasedSpeed > 0) this.maxSpeed = this.maxSpeed + increasedSpeed;
    };

    changeYearOfBuild(yearOfBuild) {
        if (yearOfBuild > 1000) this.yearOfBuild = yearOfBuild;
    };

    addedDriver(driver) {
        if (driver) this.driver = driver;
    };

}
const car = new Cars('BMW x7', 'Bavaria Motors', '2021', 150, '5.7L');
car.info();
car.increaseMaxSpeed(22);
car.addedDriver('Valera');
car.changeYearOfBuild('2024')
console.log(car)


