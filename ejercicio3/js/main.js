'use strict';

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

const listContainer = document.querySelector('.list__container');

// function addElement() {
//   for(let i=0; i<data.length; i++) {
//     const title = data[i].title;
//     const image = data[i].image;

//     const contElement = `<li class="news__item">
//     <h2 class="news__title">${title}</h2>
//     <img class="news__image" src="${image}" alt="${title}">
//     </li>`;

//     listContainer.innerHTML += contElement;
//   }
//   addMartianClass();
// }

// addElement();

// function addMartianClass() {
//   const elements = document.querySelectorAll('.news__item');

//   for(let i=0; i<elements.length; i++) {
//     const elementTitle = elements[i].querySelector('.news__title');

//     const isMars = elementTitle.innerHTML.includes('Mars');
//     const isMartian = elementTitle.innerHTML.includes('Martians');

//     if (isMars === true || isMartian === true) {
//       elementTitle.classList.add ('news__item--from-mars');
//     }
//   }
// }

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const news = data.news;
    for(let i=0; i<news.length; i++) {
      const title = news[i].title;
      const image = news[i].image;

      const contElement = `<li class="news__item">
      <h2 class="news__title">${title}</h2>
      <img class="news__image" src="${image}" alt="${title}">
      </li>`;

      listContainer.innerHTML += contElement;
    }
  });
