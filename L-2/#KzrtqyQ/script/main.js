let dayNumber = +prompt('Number of the day');

if (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber)) {
    console.log('PLS write the correct number of the day.');
} else {
    switch (dayNumber) {
        case 1:
            console.log('Monday - Learn English!');
            break;
        case 2:
            console.log('Tuesday - Again, learn English!');
            break;
        case 3:
            console.log('Wednesday - learn English!');
            break;
        case 4:
            console.log('Thursday - bro go and learn English!');
            break;
        case 5:
            console.log("Friday - Learn and again learn English!");
            break;
        case 6:
            console.log("Saturday - Learn, learn and one more time learn English!");
            break;
        case 7:
            console.log("Sunday - Ok! today u can get a little bit rest! Drink beer!");
            break;
        default:
            console.log("PLS write the correct number of the day.");
    }
}
