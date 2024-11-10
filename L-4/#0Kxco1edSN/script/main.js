function ulMaker(lishka, value) {
    document.write('<ul>');
    for (let i = 0; i < value; i++) {
        document.write(`<li>${lishka}</li>`)
    }
    document.write('</ul>');
}

ulMaker( 'herzlich willkommen',3);
