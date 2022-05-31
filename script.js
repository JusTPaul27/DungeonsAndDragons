const BASE_URL = 'https://www.dnd5eapi.co/api/classes'
let classesArray = [];

fetch(BASE_URL)
.then(response => response.json())
.then(result => initclasses(result));


const classesTemplate = 
`    <div class="card" style="width: 18rem;">
<img src="#FOTO" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">#NAME</h5>
  <p class="card-text">#ROLE</p>
  <a href="#URLDIRIFERIMENTO" class="btn btn-primary">Learn more</a>
</div>
</div>
`

function initclasses(classessObj) {
    const array = classessObj.results;
    classesArray = array.map(o => classes.fromDbObj(o))
    displayclasses(classesArray)
}

// function displayclasses(classes) {

//     const classesSContainer = document.getElementById('classes-container');
//     classesContainer.innerHTML = '';
//     for (const classes of classeses) {
        
//         const classesCard = document.getElementsByClassName('card');
//         classesCard.classList.add('classes-card');
//         const cardHtml = classesTemplate.replace('#NAME', classes.name).replace('#ROLE', 'Ruolo: ')
//         classesCard.innerHTML = cardHtml;
//         classesContainer.appendChild(classesCard);
//     }
// }


function displayclasses(classe) {
    
    const classesContainer = document.getElementById('classes-container');
    classesContainer.innerHTML = '';

    for (const classe of classes) {

        
        
    }
}