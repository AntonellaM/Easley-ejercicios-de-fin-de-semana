'use strict';

const news = document.querySelector('.news');

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100',
  },
];

// 1/ Listado de noticias
const paintNews = array => {
  for (const item of array) {
    const { title, image } = item;
    const listItem = document.createElement('li');
    listItem.classList.add('news__item');

    const listTitle = document.createElement('h2');
    listTitle.classList.add('news__title');
    const titleText = document.createTextNode(title);
    listTitle.appendChild(titleText);

    const listImage = document.createElement('img');
    listImage.classList.add('news__image');
    listImage.setAttribute('src', image);
    listImage.setAttribute('alt', title);

    listItem.appendChild(listTitle);
    listItem.appendChild(listImage);
    news.appendChild(listItem);
  }
};

paintNews(data);
