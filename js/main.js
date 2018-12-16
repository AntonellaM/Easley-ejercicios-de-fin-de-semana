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

// //1

// const containerList = document.querySelector('.news');

// for (let i=0; i<data.length; i++){
//   containerList.innerHTML += `
//   <li class="news__item">
//       <h2 class="news__title">${data[i].title}</h2>
//       <img class="news__image" src="${data[i].image}" alt="${data[i].title}">
//     </li>
//   `
// }

// //2

// let listItems = document.querySelectorAll('.news__item');
// let titleContent = document.querySelectorAll('.news__title');

// for(let i=0; i<titleContent.length; i++){
//   if(titleContent[i].innerHTML.includes('Martians')){
//     listItems[i].classList.add('news__item--from-mars');
//   } else if (titleContent[i].innerHTML.includes('Mars')){
//     listItems[i].classList.add('news__item--from-mars');
//   }
// }

//3

// const containerList = document.querySelector('.news');


// let urlApi = "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json";

// fetch(urlApi)
//   .then(response => response.json())
//   .then(data => {
//     for(let i=0; i<data.news.length; i++){
//       containerList.innerHTML +=
//       `<li class="news__item">
//       <h2 class="news__title">${data.news[i].title}</h2>
//       <img class="news__image" src="${data.news[i].image}" alt="${data.news[i].title}">
//       </li>`
//     }

//     let listItems = containerList.querySelectorAll('.news__item');

//     for(let i=0;i<listItems.length;i++){
//       listItems[i].addEventListener('click', handle);
//     }

//   });

// //4

// function handle(e) {
//   const item = e.currentTarget;
//   item.classList.toggle('news__item--no-image-visible');
// }

//5

const url = "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json";

let colorsContainer = document.querySelector('.colors');

fetch(url)
  .then(response => response.json())
  .then(data => {
    let colors = data.palettes[0].colors;
    for(let i=0;i<colors.length; i++){
      console.log(colors[i]);
      colorsContainer.innerHTML += `
      <div class="color__item" style="background-color:#${colors[i]}"></div>
      `
    }
  });

//6




