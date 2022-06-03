const BASE_URL = 'https://www.dnd5eapi.co/api/classes';

let classesArray = [];

const classesTemplate = 
`
  <img src="#IMG" class="card-img" alt="">
  <div class="divider"></div>
  <div class="card-info">
    <span class="card-title">
      #NAME
    </span>
    <a href="#URL">
      <button class="btn btn-primary">
          <span class="material-symbols-outlined">
              Read_More
          </span>
      </button>
    </a>
  </div>
`

function printClasses(classesArray) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  for (const classes of classesArray) {
    const classesCard = document.createElement('div');
    classesCard.classList.add('card');
    const html = classesTemplate.replace('#IMG', '../assets/classes-image/' + classes.name + '-photo.png')
                                .replace('#NAME', classes.name)
                                .replace('#URL', '../pages/classes/' + classes.name + '.html');

    classesCard.innerHTML = html;
    container.appendChild(classesCard);
  }
}

function initClasses(classesJSON) {
  const array = classesJSON.results;
  classesArray = array.map(obj => Class.fromDbObj(obj));
  printClasses(classesArray);
}

function init() {
  fetch(BASE_URL)
  .then(response => response.json())
  .then(result => initClasses(result));
}

init();