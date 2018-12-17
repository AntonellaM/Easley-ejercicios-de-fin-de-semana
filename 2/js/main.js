'use strict';

//añadir el número del ejercicio
const title = document.querySelector('.exercise__number');
title.innerHTML = 'Ejercicio 2';

//recoger las información

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100/BC2731/ff4400'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100/BC2731/ff4400'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100/00cc00/00ff00'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

//crear la lista y pintarla

const ulNews = document.querySelector('.news');

for (const x of data) {
  ulNews.innerHTML +=
  `<li class="news__item">
		<h2 class="news__title">${x.title}</h2>
		<img class="news__image" src="${x.image}" alt="${x.title}">
	</li>`;
}

//crear una constante que recoja todos los elementos

const newsMars = document.querySelector('.news__item');

//recorrer todos los elementos y encontrar los que contengan Mars o Martians

if(x.title.includes("Mars") || x.title.includes("Martians")){
  //destacar los elementos de la lista que hablen de marcianos añadiendo la clase
  newsMars.classList.add('.news__item--from-mars');
}



