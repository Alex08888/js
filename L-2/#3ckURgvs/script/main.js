let time = 19;

if (time >= 0 && time <= 14) {
    console.log('first part');
} else if (time >= 15 && time <= 29) {
    console.log('second part');
} else if (time >= 30 && time <= 44) {
    console.log('third part');
} else if (time >= 45 && time <= 59) {
    console.log('fourth part');
} else {
    console.log('incorrect time');
}