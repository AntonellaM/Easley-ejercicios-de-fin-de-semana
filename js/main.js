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

const ulContainer = document.querySelector('.news');

for (let i = 0; i<data.length; i++) {

  const titles = data[i].title;

  const images = data[i].image;

  ulContainer.innerHTML += `<li class="news__item"><h2 class="news__title">${titles}</h2>

  <img src="${images}" alt="${titles}" class="news__image"></li>`;
}


const liElement = document.querySelectorAll('.news__item');

const liChildren = document.querySelectorAll('.news__title');



for (let i = 0; i<liElement.length; i++) {

  if(liChildren[i].innerHTML.includes('Mars')) {

    liChildren[i].parentElement.classList.add('news__item--from-mars');

    console.log(liElement);

  } else if (liChildren[i].innerHTML.includes('Martians')) {

    liChildren[i].parentElement.classList.add('news__item--from-mars');

    console.log(liElement);

  }
}



 
// Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
// Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al licorrespondiente la clase .news__item--from-mars
// Tada!!


