const sum = arr => {
    let a = 0;
    for (const item of arr) {
        a = a + item;
    }
    return a;
}

console.log(sum([12, 34, 65, 903, 12]))