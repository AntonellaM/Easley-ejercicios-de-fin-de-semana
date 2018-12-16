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
const news = document.querySelector('.news');

for (let i = 0; i < data.length; i++) {
  const title = data[i].title;
  const image = data[i].image;
  const items = `<li class="news__item">
<h2 class="news__title">${title}</h2>
<img class="news__image" src=${image} alt=${title}>
</li>`;
  news.innerHTML += items;
};

function addMClass() {
  const item = news.querySelectorAll('.news__item');
  for (let i = 0; i < item.length; i++) {
    const itemsTitle = item[i].querySelector('.news__title').innerHTML;
    if (itemsTitle.includes('Mars') || itemsTitle.includes('Martian')) {
      itemsTitle.classList.add('news__item--from-mars');
    };
  };
};
addMClass();














