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

//pintar en el html un listado a partir del array que tenemos en el js
const ul = document.querySelector('.news');

for (let i=0; i<data.length; i++){

  ul.innerHTML += `<li class="news__item"><h2 class="news__title">${data[i].title}</h2><img class="news__image" src="${data[i].image}" alt="${data[i].title}"></li>`;

}

//Buscaremos todos los elementos con clase .news__item.
const li = document.querySelectorAll('.news__item');
const h2 = document.querySelectorAll('.news__title');
let titles =[];
// Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
for (let i=0; i<li.length; i++){
  titles.push(li[i].firstChild.innerHTML);
}


console.log(titles);
// Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars


