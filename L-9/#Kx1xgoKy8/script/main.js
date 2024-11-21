let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray) {

    const div = document.createElement('div');
    div.classList.add('item');

    const h1 = document.createElement('h1');
    h1.innerText = `${courses.title}`;
    h1.classList.add('heading');

    const p = document.createElement('p');
    p.innerText = `${courses.monthDuration}`;
    p.classList.add('description');


    div.append(h1, p);
    document.body.append(div);
}
