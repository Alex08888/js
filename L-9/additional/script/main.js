let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass']
    }
];


for (const courses of coursesArray) {

    const divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapper');

    const h2Caption = document.createElement('h2');
    h2Caption.innerText = `${courses.title}`;
    h2Caption.classList.add('caption');

    const h2MonthDuration = document.createElement('h2');
    h2MonthDuration.innerText = `Month Duration - ${courses.monthDuration}`;
    h2MonthDuration.classList.add('monthDuration');

    const h2HoursDuration = document.createElement('h2');
    h2HoursDuration.innerText = ` Hours Duration - ${courses.hourDuration}`;
    h2HoursDuration.classList.add('hoursDuration');

    const ulModules = document.createElement('ul');
    ulModules.classList.add('modules');

    for (const module of courses.modules) {

        const liModulesList = document.createElement('li');
        liModulesList.innerText=`${module}`

        ulModules.appendChild(liModulesList);
    }

    divWrapper.append(h2Caption, h2MonthDuration, h2HoursDuration, ulModules);
    document.body.append(divWrapper);
}