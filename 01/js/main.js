'use strict';

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
// Guardo la referencia al elemento donde voy a inyectar las noticias
const news = document.querySelector('.news');

/**
 * Función flecha que escribe las noticias y recibe dos parámetros
 * - arr: El array de noticias
 * - el: La referencia al elemento html donde irán las noticias
 */
const writeNews = (arr, el) => {
  let items = '';
  for (const a of arr) {
    items += `
     <li class="news__item">
      <h2 class="news__title">${a.title}</h2>
      <img class="news__image" src="${a.image}" alt="${a.title}">
    </li>`;
  }
  el.innerHTML = items;
};

// Llamo a mi función y le pado el array de noticias y la referencia a mi lista `.news`
writeNews(data, news);
