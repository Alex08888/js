class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}

class Prince {

    constructor(name, age, foundSlipper) {
        this.name = name;
        this.age = age;
        this.foundSlipper = foundSlipper;
    }
}

const cinderellas = [
    new Cinderella('Lilu', 21, 36),
    new Cinderella('Myki', 59, 41),
    new Cinderella('Baba Galia', 79, 43),
    new Cinderella('Lola', 16, 35),
    new Cinderella('Sasha', 30, 40),
    new Cinderella('Alexa', 29, 38),
    new Cinderella('Ola', 44, 45),
    new Cinderella('Oleg', 18, 39),
    new Cinderella('Evdokia', 36, 42),
    new Cinderella('Mary', 50, 37),
];
const prince = new Prince('Augustin IV', 19, 43);
const find = cinderellas.find(cinderella => cinderella.footSize === prince.foundSlipper);
console.log(find);
