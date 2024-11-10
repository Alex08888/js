function subjects(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }

}

subjects([
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Johny", age: 27},
    {id: 3, name: "Sparrow", age: 30},
    {id: 4, name: "Jim Bim", age: 25},
    {id: 5, name: "Walker", age: 18},
])