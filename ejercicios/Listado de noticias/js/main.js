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

const list = document.querySelector('.news');

for (const item of data) {
    const newline = document.createElement('li');
    newline.setAttribute('class', 'news__item');
    const newTitle = document.createElement('h2');
    newTitle.setAttribute('class', 'news__title');
    const titleContent = document.createTextNode(item.title);
    newTitle.appendChild(titleContent);
    const newImage = document.createElement('img');
    newImage.setAttribute('class', 'news__image');
    newImage.setAttribute('alt', item.title);
    newImage.setAttribute('src', item.image);
    newline.appendChild(newTitle);
    newline.appendChild(newImage);
    list.appendChild(newline);
    
    console.log(newline);
}