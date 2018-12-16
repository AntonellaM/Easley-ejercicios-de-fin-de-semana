'use strict';
console.log('ejercicio 4');

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

const urlApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const ul = document.querySelector('.news');
fetch(urlApi).then(response => response.json()).then(data => {
  for (let i = 0; i<data.news.length; i++){
    ul.innerHTML += 
    `<li class="news__item news__item--no-image-visible">
      <h2 class="news__title">${data.news[i].title}</h2>
      <img class="news__image" src="${data.news[i].image}" alt="${data.news[i].title}">
    </li>`;

    const liItems = document.querySelectorAll('.news__item');
    
    if(data.news[i].title.includes("Mars") || data.news[i].title.includes("Mart")){
      console.log(data.news[i].title + ' incluye Mars');
      liItems[i].classList.add('news__item--from-mars');
    } else {
      console.log(data.news[i].title + ' no incluye Mars');
    }
  }

});  
