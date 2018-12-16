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
  const addTitle = cosis.title;
  const addImage = cosis.image;
  cosis[data] = `<li class="news__item"> <h2 class="news__title">${addTitle}</h2> <img class="news__image" src="${addImage}" alt="${addTitle}"> </li>`;

  news.innerHTML += cosis[data];
}

function selectMartianMars (){
  // 1. Buscaremos todos los elementos con clase `.news__item`.
  const currentNews = news.querySelectorAll('.news__item');

  // 2. Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
  for (const item of currentNews) {
    const title = item.querySelector('.news__title').innerHTML;

    // 3. Usando el método `includes()` comprobaremos si contienen “Mars” o “Martian” y aplicaremos al `li`correspondiente la clase `.news__item--from-mars`
    if (title.includes('Mars') || title.includes('Martian')){
      item.classList.add('news__item--from-mars');
    }
  }
}

selectMartianMars();
