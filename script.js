const BASE_URL = 'https://www.dnd5eapi.co/api/classes'
let classesArray = [];

fetch(BASE_URL)
.then(response => response.json())
.then(result => initClasses(result));


const classesTemplate = 
`
<img src="#FOTO" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">#NAME</h5>
  <p class="card-text">#ROLE</p>
  <a href="#URLDIRIFERIMENTO" class="btn btn-primary">Learn more</a>
</div>
`
function initClasses(classesObj) {
  const array = classesObj.results;
  classesArray = array.map(o => Class.fromDbObj(o));
  displayClasses(classesArray);
}

function displayClasses(classes) {
  const classesContainer = document.getElementById('classes-container');
  classesContainer.innerHTML = '';

  for (const classe of classes) {
    
    const classCard = document.createElement('div');
    classCard.classList.add('card');
    const html = classesTemplate.replace('#FOTO', './assets/classes-image/' + classe.name + '-photo.png')
                                .replace('#NAME', classe.name)
                                .replace('#URLDIRIFERIMENTO', classe.url);

    classCard.innerHTML = html;
    classesContainer.appendChild(classCard);

  }
}




