'use strict';

/* Ejercicio 3 */

//Declare variables
const listContainer = document.querySelector('.container');
const apiUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

//Make the petition
fetch (apiUrl)
  .then(response => response.json())
  .then(data => {
    //Save the results in a constant
    const newsFromHome = data.news;

    //Go through the array
    for (let i = 0; i <newsFromHome.length ; i++){
      //Save the results from titles and images in constants
      const title = newsFromHome[i].title;
      const image = newsFromHome[i].image;
      //Create the list
      const content = `
      <li class="news__item">
      <h2 class="news__title">${title}</h2>
      <img class="news__image" src="${image}" alt="${title}">
    </li>`;
      //Put the results in the HTML
      listContainer.innerHTML += content;
    }
  });

/* Ejercicio 4 */

// Vamos a añadir una pequeña funcionalidad a nuestro listado de noticias: por defecto no se van a ver las imágenes, pero al hacer click haremos que sean visibles o vuelvan a ser invisibles... y todo cambiando 1 sola clase que aplicaremos al contenedor general de cada noticia, el LI.

// Por defecto todos los LI tendrán una clase extra: news__item--no-image-visible que hará que la imagen del LI no se vea.

// Al hacer click en cada noticia la quitaremos si ya la tenía o la pondremos si no la tenía de manera que al hacer click aparecerá o desaparecerá la imagen.


const image = document.querySelector('.news__image');

function changeVisibility(event){
  const items = document.querySelector('.news__item');
  for (let i=0 ; i <items.length; i++){
    const clickedItem = event.currentTarget;
    clickedItem.classList.toggle('.news__item--no-image-visible');
    clickedItem.addEventListener('click', changeVisibility);
  }
}

//Not sure if it works, but news is there's no errors in the console :)

