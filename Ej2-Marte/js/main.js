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

const list = document.querySelector('.list');
let news = '';


for (let i = 0; i < data.length; i++){

  
  news += `<li class="news__item">
  <h2 class="news__title">${data[i].title}</h2>
  <img class="news__image" src="${data[i].image}" alt="${data[i].title}">
</li>`;

}

list.innerHTML = news;

/************ EJERCICIO 2 **************/

//Buscamos todos los elementos con clase .news__item.

const elements = document.querySelectorAll('.news__item');


let arrayTitles = []; //Array con los títulos de cada li


//Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.

for (let i = 0; i < elements.length; i++ ) {
  let title;
  title = elements[i].firstElementChild.innerHTML; //accedemos al contenido del primer hijo de cada li (el título)

  arrayTitles.push(title);  
}

console.log(arrayTitles);

//Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars

for (let i = 0; i < arrayTitles.length; i++) {

  if ( arrayTitles[i].includes('Mars') || arrayTitles[i].includes('Martian') ){

    console.log('lo incluye');
    elements[i].classList.add('news__item--from-mars');
  }

}



