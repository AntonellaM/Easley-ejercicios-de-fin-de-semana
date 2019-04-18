'use strict';

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

const ulEl = document.querySelector('.news');

function hiddenImages(event) {
  event.currentTarget.classList.toggle('news__item--no-image-visible');  
}

function getItemsFromURL (data) {
  for (const newsItem of data) {

    const liEl = document.createElement('li');
    const titleEl = document.createElement('h2');
    const imgEl = document.createElement('img');
    const text = document.createTextNode(newsItem.title);

    if (newsItem.title.includes('Mars') || newsItem.title.includes('Martian')) {

      liEl.classList.add('news__item');
      liEl.classList.add('news__item--from-mars');
      liEl.classList.add('news__item--no-image-visible');
      titleEl.classList.add('news__title');
      imgEl.classList.add('news__image');
      imgEl.src = newsItem.image;
      imgEl.alt = newsItem.title;

    } else {

      liEl.classList.add('news__item');
      liEl.classList.add('news__item--no-image-visible');
      titleEl.classList.add('news__title');
      imgEl.classList.add('news__image');
      imgEl.src = newsItem.image;
      imgEl.alt = newsItem.title;

    }

    titleEl.appendChild(text);
    liEl.appendChild(titleEl);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);

    liEl.addEventListener('click', hiddenImages);
    
  }

}

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(data => getItemsFromURL(data.news));