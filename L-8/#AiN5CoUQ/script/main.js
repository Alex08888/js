function cloneFunc(object) {
    if (object) {
        let functions = [];
        for (const obj[key] in object) {
            if (typeof [key] === 'function') {
                let cloF = [key].bind({});
                functions.push({cloF, key})
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            cloneObj[func.key] = func.cloF
        }
        return cloneObj
    }
    throw new Error('something wrong!');
}


const suspectObj = {
    nickname: 'BossMolokoOtsos',
    age: 5,
    city: 'London',
    prosecution: 'Drink too mach milk',
    specificFeatures: {
        height: 100,
        footsize: 22,
    },
};
const suspectObj1 = cloneFunc(suspectObj)
console.log(suspectObj)
console.log(suspectObj1)
