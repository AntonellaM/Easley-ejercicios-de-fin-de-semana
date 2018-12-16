'use strict';
console.log('ejercicio 2');

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

const ul = document.querySelector('.news');

for (let i = 0; i<data.length; i++){
  ul.innerHTML += 
	`<li class="news__item">
		<h2 class="news__title">${data[i].title}</h2>
		<img class="news__image" src="${data[i].image}" alt="${data[i].title}">
  </li>`;

  const liItems = document.querySelectorAll('.news__item');
  
  if(data[i].title.includes("Mars") || data[i].title.includes("Mart")){
    console.log(data[i].title + ' incluye Mars');
    liItems[i].classList.add('news__item--from-mars');
  } else {
    console.log(data[i].title + ' no incluye Mars');
  }
}