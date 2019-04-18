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

const ulEl = document.querySelector('.news');

for (const newsItem of data) {

  const liEl = document.createElement('li');
  const titleEl = document.createElement('h2');
  const imgEl = document.createElement('img');
  const text = document.createTextNode(newsItem.title);

  if (newsItem.title.includes('Mars') || newsItem.title.includes('Martian')) {

    liEl.classList.add('news__item');
    liEl.classList.add('news__item--from-mars');
    titleEl.classList.add('news__title');
    imgEl.classList.add('news__image');
    imgEl.src = newsItem.image;
    imgEl.alt = newsItem.title;

  } else {

    liEl.classList.add('news__item');
    liEl.classList.add('news__item');
    titleEl.classList.add('news__title');
    imgEl.classList.add('news__image');
    imgEl.src = newsItem.image;
    imgEl.alt = newsItem.title;

  }

  titleEl.appendChild(text);
  liEl.appendChild(titleEl);
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);
  
}