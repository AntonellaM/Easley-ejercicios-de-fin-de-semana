'use strict';

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

// const newsContainer = document.querySelector('.news');

// for (let i = 0; i < data.length; i++){
//   const title = data[i].title;
//   const image = data [i].image;
//   const content = `
//   <li class="news__item">
//   <h2 class="news__title">${title}</h2>
//   <img class="news__image" src="${image}" alt="${title}">
// </li>`;

//   newsContainer.innerHTML += content;
// }

// /* Ejercicio 2 */

// /* Una vez tenemos nuestra lista de noticias vamos a destacar los resultados "marcianos" aplicando la clase .news__item--from-mars. Aplicaremos esta clase a los <li> cuyo título contenga “Mars” o “Martian” */

// /* Busco todos los elementos con clase .news__item.*/
// const items = document.querySelectorAll('.news__item');
// // console.log(items);

// /* Recorro la lista de elementos almacenando en una variable el contenido del título de cada elemento.*/
// for (let i = 0; i < items.length; i++){
//   let itemsTitle = items[i].querySelector('.news__title').innerHTML;
//   // console.log(itemsTitle);

//   /* Usando el método includes() compruebo si contienen “Mars” o “Martian”*/
//   if (itemsTitle.includes('Mars') || itemsTitle.includes('Martian')){
//     // console.log(`The title contains the words Mars or Martian`);

//     /* Aplico al li correspondiente la clase .news__item--from-mars*/
//     const items = document.querySelectorAll('.news__item');
//     items[i].classList.add('news__item--from-mars');
//   } else {
//     // console.log(`The title doesn't contains the words Mars or Martian`);
//   }
// }

/* Ejercicio 3 */

const listContainer = document.querySelector('.container');
const apiUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

fetch (apiUrl)
  .then(response => response.json())
  .then(data => {
    const newsFromHome = data.news;
    for (let i = 0; i <newsFromHome.length ; i++){
      const title = newsFromHome[i].title;
      const image = newsFromHome[i].image;
      const content = `
      <li class="news__item">
      <h2 class="news__title">${title}</h2>
      <img class="news__image" src="${image}" alt="${title}">
    </li>`;
      listContainer.innerHTML += content;
    }
  });
