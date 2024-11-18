function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price, value) {
    this.title = title;
    this.price = price;
    this.value = value;
}

const clients = [
    new Client(1, 'Nikola', 'Faraonov', 'ali@baba.com', '+101', new Product('Cellphone', 2000, '10pcs'), new Product('Book', 100, '20pcs')),
    new Client(2, 'Varsenik', 'Hachturian', 'a1@gmail.com', '+102', new Product('Fridge', 34399, '13pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs')),
    new Client(3, 'Vitalij', 'Klitchko', 'a2@gmail.com', '+103', new Product('Laptop', 89548.99, '15pcs')),
    new Client(4, 'Sasha', 'Usik', 'a3@gmail.com', '+104', new Product('Mercedes-Benz', 99999.99, '20pcs')),
    new Client(5, 'Kot', 'Leopold', 'a4@gmail.com', '+105', new Product('Milk', 120, '33pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs')),
    new Client(6, 'Wolf', 'Pogodi', 'a5@gmail.com', '+106', new Product('Rabbit', 10, '55pcs')),
    new Client(7, 'Leonardo', 'Dikaplio', 'a6@gmail.com', '+107', new Product('Slave', 0, '100pcs')),
    new Client(8, 'Kolia', 'Nikolaev', 'a7@gmail.com', '+108', new Product('Hobbit', 999, '999pcs'), new Product('Book', 100, '20pcs')),
    new Client(9, 'Name', 'Surname', 'email@gmail.com', '+109', new Product('Something', 4853435435, '10pcs')),
    new Client(10, 'Name2', 'Surname3', 'email4@gmail.com', '+110', new Product('Pen', 9999, '11pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs'), new Product('Book', 100, '20pcs')),
]

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);