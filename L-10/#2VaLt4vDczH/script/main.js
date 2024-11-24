let counter = localStorage.getItem('counter');
counter++;
localStorage.setItem('counter', counter);
document.getElementById('counter').textContent = counter;
