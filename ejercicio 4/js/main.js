'use strict';

//ejercicio 4
const list = document.querySelector('.news');

const api = `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json`;


fetch(api)
.then(r => r.json())
.then(data=>{

for(let i =0; i<data.news.length;i++){
  list.innerHTML += `
     <li class="news__item news__item--no-image-visible">
     <h2 class="news__title">${data.news[i].title}</h2>
     <img class="news__image" src="${data.news[i].image}" alt="${data.news[i].title}">
     </li>
   `;
  };
  let li = document.querySelectorAll('.news__item');
  function showImage(e){
   const liClick = e.currentTarget;
   liClick.classList.toggle('news__item--no-image-visible');
 }
  for (let i=0; i<li.length; i++){
    li[i].addEventListener('click', showImage);
  }
});

