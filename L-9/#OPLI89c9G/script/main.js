let arr = ['Main', 'Products', 'About us', 'Contacts'];

let menuList=document.createElement('ul');
document.body.appendChild(menuList);
menuList.classList.add('menuList');

for (const item of arr) {
    let liMenu = document.createElement('li');
    liMenu.innerText = item;
    menuList.appendChild(liMenu);
}