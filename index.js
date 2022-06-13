// * Declararions

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
    <button class="btn btn-primary" onclick="redirectTo('#NAME')">
        <span class="material-symbols-outlined">
            Read_More
        </span>
    </button>
  </div>
`

let slideIndex = 1; // si parte dalla prima slide

// * Slideshow

showSlides(slideIndex); // si chiama la funzione showSlides(slideNumber)

function plusSlides(slideNumber) {
  showSlides(slideIndex += slideNumber);
}

function currentSlide(slideNumber) {
  showSlides(slideIndex = slideNumber);
}

function showSlides(slideNumber) {
  let slides = document.getElementsByClassName('mySlides'); // si prendono tutte le slides
  let dots = document.getElementsByClassName('dot'); //  si prendono tutti i dots

  if (slideNumber > slides.length) slideIndex = 1; // si ritorna alla prima
  if (slideNumber < 1) slideIndex = slides.length; // si assegna la lunghezza dell'array

  for (let i = 0; i < slides.length; i++) 
    slides[i].style.display = 'none'; // elimina rendendo l'effetto di tipo fade
  for (let  j = 0; j < dots.length; j++)
    dots[j].className = dots[j].className.replace(' active', ''); //  rendi attiva al momento giusto

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
} 

// * Funzioni generiche

function goHome() {
  window.location.href = '../index.html';
}

function redirectTo(name) {
  let url = '/pages/classes.html';
  if(name) url += '?name=' + name.toLowerCase();
  window.location.href = url;
}

// * Funzioni principali

function printClasses(classesArray) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  for (const classes of classesArray) {
    const classesCard = document.createElement('div');
    classesCard.classList.add('card');
    const html = classesTemplate.replaceAll('#IMG', '../assets/classes/' + classes.name + '.png')
                                .replaceAll('#NAME', classes.name);

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