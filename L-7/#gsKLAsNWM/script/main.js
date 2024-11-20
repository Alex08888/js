// Array.prototype.meinForEach=function (callback) {
//     for (const item of this) {
//         callback(item);
//     }
// };
//
// [11,2,12,32,1223,12].meinForEach((item)=>console.log(item, typeof item));


/*------------Filter-----------*/

Array.prototype.meinFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let users = [
    {naJme: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result = users.meinFilter((user) => user.status);
console.log(result)
