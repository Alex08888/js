let div = document.createElement('div');
document.body.appendChild(div);

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('collapse');
div.classList.add('beta');
// div.classList.add('wrap','collapse','collapse','beta')
div.style.backgroundColor = 'grey';
div.style.color = 'orange';
div.style.fontSize = '10rm';

let h1 = document.createElement("h1");
div.appendChild(h1);
h1.innerText = 'some text';

const cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);