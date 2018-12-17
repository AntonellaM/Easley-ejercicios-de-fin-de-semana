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

// //ej1
// const list = document.querySelector(".news");
// let listEl = "";

// for ( const item of data){
//   listEl += `<li class="news__item"><h2 class="new__title">${item.title}</h2> <img class="news__image" src='${item.image}' alt="${item.title}"></li>`;
// };

// list.innerHTML = listEl;


// //ej2

// const newsItem = document.querySelectorAll(".news__item");

// for (let i = 0; i < newsItem.length; i++){
//   const newsMarsItemIn = newsItem[i].querySelector(".new__title").innerHTML;
//   console.log(newsMarsItemIn);

//   if (newsMarsItemIn.includes('Mars'||'Martians')) {
//     console.log('El título contiene la palabra buscada'); 
//     newsMarsItemIn.classList.add("news__item--from-mars");
//   // } else {
//   //   console.log("no")
//   }
// };



//ej3

function handlerList() {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let list = data.news;
    
    for ( const item of list) {
    let listEl = document.querySelector(".news");
    listEl.innerHTML += `<li class="news__item"><h2 class="news__title">${item.title}</h2><img class="news__image" src="${item.image}" alt="${item.title}"></li>`;  
    }
  })
}
handlerList();
