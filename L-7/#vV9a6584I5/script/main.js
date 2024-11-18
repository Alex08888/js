function Cars(model, producer, yearOfBuild, maxSpeed, engineCapacity) {
    this.model = model,
        this.producer = producer,
        this.yearOfBuild = yearOfBuild,
        this.maxSpeed = maxSpeed,
        this.engineCapacity = engineCapacity,
        this.drive = function () {
            console.log(`we driving car ${this.maxSpeed} km/h`);
        };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (increasedSpeed) {
        if (increasedSpeed > 0)  this.maxSpeed = this.maxSpeed + increasedSpeed;
    };

    this.changeYearOfBuild = function (yearOfBuild) {
        if (yearOfBuild > 1000) this.yearOfBuild = yearOfBuild;
    };
    this.addedDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Cars('BMW x7', 'Bavaria Motors', '2021', 150, '5.7L');
console.log(car)
car.drive();
car.info();
car.increaseMaxSpeed(22);
car.addedDriver('Valera');
car.changeYearOfBuild('2024')
console.log(car)