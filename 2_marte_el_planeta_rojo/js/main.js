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

  const newList = document.createElement('li');
  newList.classList.add('news__item');

  const newTitle = document.createElement('h2');
  const eachTitleText = document.createTextNode(listData.title);
  newTitle.appendChild(eachTitleText);
  newTitle.classList.add('news__title');

  const newImg = document.createElement('img');
  newImg.classList.add('news__image');
  newImg.setAttribute('src', listData.image);
  newImg.setAttribute('alt', listData.title);

  newList.appendChild(newTitle);
  newList.appendChild(newImg);

  ulContent.appendChild(newList);

  const titleEl = listData.title;
  if (titleEl.includes('Mars') || titleEl.includes('Martian')) {
    newTitle.classList.add('news__item--from-mars');
  }
}

