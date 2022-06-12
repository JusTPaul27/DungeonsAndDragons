let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) 
    slideIndex = 1;
  if (n < 1) 
      slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++)
    slides[i].style.display = 'none';
  for (let  j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
} 

function goHome() {
  window.location.href = '../index.html';
}

function redirectTo(name) {
  let url = '/pages/classes.html';
  if(name) url += '?name=' + name.toLowerCase();
  window.location.href = url;
}

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
showSlides(slideIndex);