'use strict';

const ulContent = document.querySelector('.news');

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

for (let listData of data) {
  let allofData = ` <li class="news__item">
      <h2 class="news__title">${listData.title}</h2>
      <img class="news__image" src="${listData.image}" alt="${listData.title}">
    </li>`;
  ulContent.innerHTML += allofData;
}

