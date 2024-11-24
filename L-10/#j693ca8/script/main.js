const requestedAge = document.createElement('input');
requestedAge.style.width = '200px';
requestedAge.style.height = '50px';
requestedAge.placeholder = 'Enter your age';
document.body.appendChild(requestedAge);

const btnRequestedAge = document.createElement('button');
btnRequestedAge.style.width = '200px';
btnRequestedAge.style.height = '50px';
btnRequestedAge.innerText = 'Approve your age';
document.body.appendChild(btnRequestedAge);

const message = document.createElement('p');
message.style.fontSize = '28px';
message.style.fontWeight = 'bold';
document.body.appendChild(message);

btnRequestedAge.addEventListener('click', function () {
    const age = parseInt(requestedAge.value);
    if (isNaN(age)) {
        message.innerText = 'Incorrect age!';
        message.style.color = 'orange';
    } else if (age < 18) {
        message.innerText = 'Not allowed to visit PornHub!';
        message.style.color = 'red';
    } else {
        message.innerText = 'Welcome to PornHub!';
        message.style.color = 'green';
    }
});
