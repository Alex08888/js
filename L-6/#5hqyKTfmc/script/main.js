function sortNumbs(arrayOfNumbs, direction) {
    if (direction === 'asc') return arrayOfNumbs.sort((a, b) => a - b);
    if (direction === 'desc') return arrayOfNumbs.sort((a, b) => b - a);
}

let nums = [11, 21, 3];
console.log(sortNumbs(nums, 'asc'));
console.log(sortNumbs(nums, 'desc'));