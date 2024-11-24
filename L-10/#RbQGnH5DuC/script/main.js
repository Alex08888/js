function addToLocalStorage(arrayName, objToAdd) {
    if (typeof arrayName === 'string') {
        const storedArray = JSON.parse(localStorage.getItem(arrayName) || '[]');
        storedArray.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(storedArray));
    }
}

addToLocalStorage('myArray', { name: 'Jimmy', age: 130 });
addToLocalStorage('myArray', { name: 'Aladin', age: 15 });