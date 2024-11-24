const storage = JSON.parse(localStorage.getItem('data')) || [];
storage.push(new Date());
localStorage.setItem('data', JSON.stringify(storage));