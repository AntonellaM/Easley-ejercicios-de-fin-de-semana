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

// Ejercicio 1

const newsList = document.querySelector('.news');

for(let ii = 0; ii < data.length; ii++) {
  const newLi = document.createElement('li');
  const newH2 = document.createElement('h2');
  const newImg = document.createElement('img');

  newLi.classList.add('news__item');
  newH2.classList.add('news_title');
  newImg.classList.add('news_image');

  const newsTitle = data[ii].title;
  const newsImage = data[ii].image;

  newImg.src = newsImage;
  newImg.setAttribute('alt', newsTitle);

  newH2.appendChild(document.createTextNode(newsTitle));
  newLi.appendChild(newH2);
  newLi.appendChild(newImg);

  newsList.appendChild(newLi);
}

// Ejercicio 2
const newsItem = document.querySelectorAll('.news__item');

for(let ii = 0; ii < newsItem.length; ii++) {

  if(newsItem[ii].innerHTML.includes('Mars') || newsItem[ii].innerHTML.includes('Martian')){
    newsItem[ii].classList.add('news__item--from-mars');
  }
}
