'use strict';

const newsElement = document.querySelector('.news');

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

for (const newsItem of data) {
  newsElement.innerHTML +=  `<li class="news__item">
<h2 class="news__title">${newsItem.title}</h2>
<img class="news__image" src=${newsItem.image} alt=${newsItem.title}>
</li>`;

}

let marsElement = document.querySelectorAll('.news__item');

for (let i =0; i < marsElement.length; i++) {
  if (marsElement[i].innerHTML.includes('Mars') || marsElement[i].innerHTML.includes('Martian')) {
    marsElement[i].classList.add('news__item--from-mars');
  }
}