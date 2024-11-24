const h1 = document.getElementById('price');

let value = +JSON.parse(localStorage.getItem('value'));
if (value < 10) {
    value = 10;
}
h1.textContent = `${value}`;

let storageTime = +JSON.parse(localStorage.getItem('storageTime')) || 0;

let currentTime = new Date().getTime();

if (currentTime > (storageTime + 10000)) {
    localStorage.setItem('storageTime', JSON.stringify(currentTime));
    let newValue = value + 10;
    localStorage.setItem('value', JSON.stringify(newValue));
}