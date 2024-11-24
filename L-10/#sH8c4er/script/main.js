let div = document.createElement('div');
div.id = 'text';
div.innerText = 'lorem bolerem valerem';

let button = document.createElement('button');
button.style.width = '50px';
button.style.height = '20px';
button.innerText = 'done!';

document.body.append(div, button);

button.onclick = function () {
    document.getElementById('text').remove();
};
