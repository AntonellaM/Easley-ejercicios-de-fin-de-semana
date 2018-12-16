'use strict';

/************ EJERCICIO 4 **************/

const list = document.querySelector('.list');
let arrayNews = [];
let newsLi = '';


//Hacemos la petición de las noticias al servidor y las añadimos al HTML

function drawNewsList() {

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //almacenamos el contenido de la key "news"
      arrayNews = data.news;


      //pintamos los li, cada uno con una noticia
      for (let i = 0; i < arrayNews.length; i++) {

        newsLi += `
      <li class="news__item news__item--no-image-visible">
        <h2 class="news__title">${arrayNews[i].title}</h2>
        <img class="news__image" src="${arrayNews[i].image}" alt="${arrayNews[i].title}">
      </li>`;

      }

      list.innerHTML = newsLi;

      //Buscamos todos los elementos con clase .news__item. Tenemos que hacer esta búsqueda dentro del .then, porque si la hacemos fuera, aun no se han pintado los li
      let elements = document.querySelectorAll('.news__item');

      //Añadimos un listener a cada item 
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', showHideImage);
      }

    });

}

/** Función que quita o pone la clase que oculta la imagen */

function showHideImage(ev) {

  let currentLi = ev.currentTarget;

  //comprobamos si el li tiene o no la clase. Se puede hacer de tres formas

  /* Forma 1
  if (currentLi.className === 'news__item news__item--no-image-visible') {

    currentLi.classList.remove('news__item--no-image-visible');

  } else {
    currentLi.classList.add('news__item--no-image-visible');
  }
  */


  /* Forma 2
  if (currentLi.classList.contains('news__item--no-image-visible')) {
    currentLi.classList.remove('news__item--no-image-visible');

  } else {
    currentLi.classList.add('news__item--no-image-visible');
  }
  */

  /* Forma 3 */

  currentLi.classList.toggle('news__item--no-image-visible');

}

drawNewsList();
