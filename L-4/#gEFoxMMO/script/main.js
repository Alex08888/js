function functionUl(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

functionUl([22, 33, 44, 55555, false, true, 'holla'])