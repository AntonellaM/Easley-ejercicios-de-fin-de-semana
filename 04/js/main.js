'use strict';
console.log('ejercicio 4');

const urlApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const ul = document.querySelector('.news');

fetch(urlApi).then(response => response.json()).then(data => {
  for (let i = 0; i<data.news.length; i++){
    ul.innerHTML += 
    `<li class="news__item news__item--no-image-visible">
      <h2 class="news__title">${data.news[i].title}</h2>
      <img class="news__image" src="${data.news[i].image}" alt="${data.news[i].title}">
    </li>`;
  }
  let liItem = document.querySelectorAll('.news__item');
  for(let i=0; i<liItem.length;i++){
    liItem[i].addEventListener("click", showImage);

    if(data.news[i].title.includes("Mars") || data.news[i].title.includes("Mart")){
    // console.log(data.news[i].title + ' incluye Mars');
      liItem[i].classList.add('news__item--from-mars');
    } else {
    //  console.log(data.news[i].title + ' no incluye Mars');
    }
  }

});

function showImage(e){
  const item = e.currentTarget;
  item.classList.toggle('news__item--no-image-visible');
}