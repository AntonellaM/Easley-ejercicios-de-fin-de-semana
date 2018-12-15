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

// //ejercicio-1
//const list = document.querySelector('.news');

// for (let i = 0; i < data.length; i++) {
//   list.innerHTML += `
//   <li class="news__item">
//   <h2 class="news__title">${data[i].title}</h2>
//   <img class="news__image" src="${data[i].image}" alt="${data[i].title}">
//   </li>
// `;
// };

// //ejercicio-2
// const item = document.querySelectorAll('.news__item');
// console.log(item);
// for(let i = 0; i < item.length; i++) {
//   let newTitle = data[i].title;

//   if (newTitle.includes('Martian') || newTitle.includes('Mars')) {
//     console.log(`El título ${data[i].title} contiene la palabra buscada`);
//     item[i].classList.add('news__item--from-mars');
//   } else {
//     console.log(`El título ${data[i].title} no contiene la palabra buscada`);
//   }
// }

// //ejercicio-3
const list = document.querySelector('.news');
const api = `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json`;

fetch(api)
.then(r => r.json())
.then(data=>{
for(let i =0; i<data.news.length;i++){
  list.innerHTML += `
     <li class="news__item">
     <h2 class="news__title">${data.news[i].title}</h2>
     <img class="news__image" src="${data.news[i].image}" alt="${data.news[i].title}">
     </li>
   `;
  console.log(data.news.length);
}
  console.log(data);
});

