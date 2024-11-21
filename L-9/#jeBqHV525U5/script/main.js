let oktenCourses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let ol = document.createElement('ol');

for (const courses of oktenCourses) {
    const li=document.createElement('li')
    li.innerText = `${courses.title} - ${courses.monthDuration} months`;
    ol.appendChild(li);
}

document.body.appendChild(ol);