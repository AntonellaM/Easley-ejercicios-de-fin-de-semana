'use strict';

const data = [{
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

// //Ejercicio 1 -------------------------------------
let listEl = document.querySelector('.news');
// let titleObj = '';
// let imageObj = '';

// for (const object of data){
//   titleObj = object.title;
//   imageObj = object.image;
//   let newsItem = document.createElement('li');
//   newsItem.className = "news__item";
//   let newsTitle = document. createElement('h2');
//   newsTitle.className = "news__title";
//   let newsTitleContent = document.createTextNode(`${titleObj}`);
//   newsTitle.appendChild(newsTitleContent);
//   let newsImage = document.createElement('img');
//   newsImage.className = "news__image";
//   newsImage.src = `${imageObj}`;
//   newsImage.setAttribute('alt', `${titleObj}`);
//   newsItem.append(newsTitle,newsImage);
//   listEl.appendChild(newsItem);
// }


// Ejercicio 2----------------------------------------
// const newsItemElements = listEl.querySelectorAll('.news__item');
// for (const newsItemElement of newsItemElements){
//   let titleItemEl = newsItemElement.querySelector('h2').innerHTML;
//   if (titleItemEl.includes('Mars' || 'Martian')){
//     newsItemElement.classList.add('news__item--from-mars');
//   }
// }

//Ejercicio 3 y 4----------------------------------------
// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
//   .then(response => response.json())
//   .then(data => data.news)
// for (const object of data) {
//   let newsItem = document.createElement('li');
//   newsItem.className = "news__item, news__item--no-image-visible";
//   let newsTitle = document.createElement('h2');
//   newsTitle.className = "news__title";
//   let newsTitleContent = document.createTextNode(`${object.title}`);
//   newsTitle.appendChild(newsTitleContent);
//   let newsImage = document.createElement('img');
//   newsImage.className = "news__image";
//   newsImage.src = `${object.image}`;
//   newsImage.setAttribute('alt', `${object.title}`);
//   newsItem.append(newsTitle, newsImage);
//   listEl.appendChild(newsItem);
// }

// let newsItem = document.querySelectorAll('li');
// for (let i = 0; i < newsItem.length; i++){
//   newsItem[i].addEventListener('click', handleImageDisplay)
// };

// function handleImageDisplay(event) {
//   let selectedImage = event.currentTarget;
//   selectedImage.classList.toggle('news__item--no-image-visible');
// };

//Ejercicio 5 -------------------------------------------------------
// let totalColors = "";

// fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
//   .then(response => response.json())
//   .then(results => {
//     const totalObjets = results.palettes;
//     for (const object of totalObjets) {
//       totalColors = object.colors;
//     };
//     for (const colors of totalColors) {
//       const fatherDiv = document.querySelector('.father_div');
//       const divOfColor = document.createElement('div');
//       divOfColor.className = 'div__content';
//       fatherDiv.appendChild(divOfColor);
//       divOfColor.style.backgroundColor = `#${colors}`;
//     }
//   });

//Ejercicio 6 --------------------------------------------------------
let totalColors = "";
let newItemEl = "";
let newTitleEl = "";
let contentTitle = "";
let nameFilm = "";
let newDivEl = "";
let newContainerDiv = "";
listEl = document.querySelector('ul');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(results => {
    const totalFilms = results.palettes;
    //Creamos los elementos de la lista con su título correspondiente
    for (const films of totalFilms) {
      totalColors = films.colors;
      nameFilm = films.name;
      newItemEl = document.createElement('li');
      newItemEl.className = "item__film";
      newTitleEl = document.createElement('h2');
      contentTitle = document.createTextNode(nameFilm);
      newContainerDiv = document.createElement('div');
      newContainerDiv.className = "container_div";
      newTitleEl.appendChild(contentTitle);
      newItemEl.append(newTitleEl, newContainerDiv);
      listEl.appendChild(newItemEl);
      //Queremos crear divs para pintarlos con los colores en cada li
      for (const color of totalColors){
        newDivEl = document.createElement('div');
        newDivEl.style.backgroundColor = `#${color}`;
        newDivEl.className = "div__content";
        newContainerDiv.appendChild(newDivEl);
      };
    }});