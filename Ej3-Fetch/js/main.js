'use strict';
/******************* EJERCICIO 3 *********************/

const list = document.querySelector('.list');
let arrayNews = [];
let newsLi = '';

//Hacemos la petición de las noticias al servidor

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


      newsLi += `<li class="news__item">
                <h2 class="news__title">${arrayNews[i].title}</h2>
                <img class="news__image" src="${arrayNews[i].image}" alt="${arrayNews[i].title}">
              </li>`;

    }

    list.innerHTML = newsLi;


    /************ EJERCICIO 2 **************/

    //Buscamos todos los elementos con clase .news__item.

    const elements = document.querySelectorAll('.news__item');
    let title = '';
    let element;

    //Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.

    for (let i = 0; i < elements.length; i++) {

      //accedemos al contenido del primer hijo de cada li (el título)
      title = elements[i].firstElementChild.innerHTML;

      //Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars
      if (title.includes('Mars') || title.includes('Martian')) {

        element = elements[i];

        element.classList.add('news__item--from-mars');
      }

    }

  });



