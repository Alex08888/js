const kgNumber = document.getElementById('kgNumber');
const result = document.getElementById('converResult');

kgNumber.oninput = function () {
    let results = +kgNumber.value * 2.2046;
    result.innerText = `${results} lb`;
};