'use strict';
const news = document.querySelector('.news');
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

// Bucle nuevo ES6
for (const cosis of data) {
  const title = cosis.title;
  const image = cosis.image;
  cosis[data] = `<li class="news__item"> <h2 class="news__title">${title}</h2> <img class="news__image" src="${image}" alt="${title}"> </li>`;

  news.innerHTML += cosis[data];
}

// Bucle anterior a ES6
// for (let i = 0; i < data.length; i++) {
//   const title = data[i].title;
//   const image = data[i].image;
//   const addContent = `<li class="news__item"> <h2 class="news__title">${title}</h2> <img class="news__image" src="${image}" alt="${title}"> </li>`;

//   news.innerHTML += addContent;
// }
