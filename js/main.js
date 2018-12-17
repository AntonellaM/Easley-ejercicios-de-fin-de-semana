'use strict';

const listEl = document.querySelector('.news');


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

for (let i = 0; i < data.length; i++) {
  const titleEl = data[i].title;
  const imageEl = data[i].image;
  listEl.innerHTML += `<li class="news__item"> <h2 class="news__title">${titleEl}</h2> <img class="news__image" src="${imageEl}" alt= "${titleEl}"></li>`;


}

//EX II

const newListEls = listEl.querySelectorAll('.news__item');

for (const newListEl of newListEls) {
 const marsTitle = newListEl.querySelector('h2').innerHTML;
  if (marsTitle.includes('Mars' || 'Martian')) {
    newListEl.classList.add('news__item--from-mars');
  }
}

