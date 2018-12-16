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

const listEl = document.querySelector('.news');
let titleObj = '';
let imageObj = '';

for (const object of data){
  titleObj = object.title;
  imageObj = object.image;
  let newsItem = document.createElement('li');
  newsItem.className = "news__item";
  let newsTitle = document. createElement('h2');
  newsTitle.className = "news__title";
  let newsTitleContent = document.createTextNode(`${titleObj}`);
  newsTitle.appendChild(newsTitleContent);
  let newsImage = document.createElement('img');
  newsImage.className = "news__image";
  newsImage.src = `${imageObj}`;
  newsImage.setAttribute('alt', `${titleObj}`);
  newsItem.append(newsTitle,newsImage);
  listEl.appendChild(newsItem);
}