'use strict';

const listEl = document.querySelector('.news');


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


for (let i = 0; i < data.length; i++) {
  listEl.classList.add('news__item');

  if(listEl===data[i].title) {
    listEl.classList.add('news__title');
  } else {
    listEl.classList.add('news__image');
  }

    const titleEl = data[i].title;
  listEl.innerHTML += `<h2>${titleEl}</h2>`;
    const imageEl = data[i].image;
  listEl.innerHTML += `<img src="${imageEl}" alt= "${titleEl}">`;

}
