'use strict';

/************ EJERCICIO 4 **************/

const list = document.querySelector('.list');
let arrayNews = [];
let newsLi = '';
let elements = [];




//Hacemos la petición de las noticias al servidor y las añadimos al HTML

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    //alamcenamos el contenido de la key "news"
    arrayNews = data.news;

    //console.log(arrayNews);

    //pintamos los li, cada uno con una noticia

    for (let i = 0; i < arrayNews.length; i++) {


      newsLi += `<li class="news__item news__item--no-image-visible">
                <h2 class="news__title">${arrayNews[i].title}</h2>
                <img class="news__image" src="${arrayNews[i].image}" alt="${arrayNews[i].title}">
              </li>`;

    }

    list.innerHTML = newsLi;

    //Buscamos todos los elementos con clase .news__item. Tenemos que hacer esta búsqueda dentro del .then, porque si la hacemos fuera, aun no se han pintado los li
    elements = document.querySelectorAll('.news__item');

  });

function showHideImage(elements) {

  
  for (let i = 0; i < elements.length; i++) {

    //comprobamos si cada uno de los li tiene o no la clase
    if (elements[i].className === 'news__item news__item--no-image-visible') {

      elements[i].classList.remove('news__item--no-image-visible');

    } else {
      elements[i].classList.add('news__item--no-image-visible');
    }
    // console.log('clases que contiene este li',elements[i].className);  
  }

}

function showHide (e) {
  showHideImage();
}

elements.addEventListener('click', showHide);


