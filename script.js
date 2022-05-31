const BASE_URL = 'https://www.dnd5eapi.co/api/classes'
let classesArray = [];

fetch(BASE_URL)
.then(response => response.json())
.then(result => initclasses(result));


const classesTemplate = 
`<span>#NAME</span>`

function initclasses(classessObj) {
    const array = classessObj.results;
    classesArray = array.map(o => classes.fromDbObj(o))
    displayclasses(classesArray)
}

function displayclassess(classes) {

    const classesSContainer = document.getElementById('classes-container');
    classesSContainer.innerHTML = '';
    for (const classes of classes) {
        
        const classesCard = document.createElement('div');
        classesCard.classList.add('classes-card');
        const cardHtml = classesTemplate.replace('#NAME', classes.name);
        classesCard.innerHTML = cardHtml;
        classesSContainer.appendChild(classesCard);
    }
}