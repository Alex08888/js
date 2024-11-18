// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'Sasha', 'Grey', '123@gmail.com', '+911'),
//     new User(2, 'Jenna', 'Jameson', '1234@gmail.com', '+912'),
//     new User(3, 'Mia', 'Malkova', '123456@gmail.com', '+913'),
//     new User(4, 'Adella', 'Danger', '1234567@gmail.com', '+914'),
//     new User(5, 'Riley', 'Reid', '12345678@gmail.com', '+915'),
//     new User(7, 'Eva', 'Angelina', '123456789@gmail.com', '+916'),
//     new User(8, 'Lysyj', 'IzBrazzers', '1234567890@gmail.com', '+917'),
//     new User(9, 'Sunny', 'Leone', '12345678901@gmail.com', '+918'),
//     new User(10, 'Tera', 'Patrick', '123456789012@gmail.com', '+919'),
// ];
// const filteredIds = users.filter(user => user.id % 2 === 0);
// console.log(filteredIds);

/*--------------------------or---------------------*/

let users = [
        {id: 1, name: 'Sasha', surname: 'Grey', email: '123@gmail.com', phone: '+9112'},
        {id: 2, name: 'Sasha', surname: 'Grey', email: '123@gmail.com', phone: '+9112'},
        {id: 3, name: 'Jenna', surname: 'Jameson', email: '1234@gmail.com', phone: '+912'},
        {id: 4, name: 'Adella', surname: 'Danger', email: '1234567@gmail.com', phone: '+914'},
        {id: 5, name: 'Riley', surname: 'Reid', email: '12345678@gmail.com', phone: '+915'},
        {id: 6, name: 'Riley', surname: 'Reid', email: '12345678@gmail.com', phone: '+915'},
        {id: 7, name: 'Eva', surname: 'Angelina', email: '123456789@gmail.com', phone: '+916'},
        {id: 8, name: 'Lysyj', surname: 'IzBrazzers', email: '1234567890@gmail.com', phone: '+917'},
        {id: 9, name: 'Sunny', surname: 'Leone', email: '12345678901@gmail.com', phone: '+918'},
        {id: 10, name: 'Tera', surname: 'Patrick', email: '123456789012@gmail.com', phone: '+919'},
    ];
const filteredIds = users.filter(user => user.id % 2 === 0);
console.log(filteredIds);