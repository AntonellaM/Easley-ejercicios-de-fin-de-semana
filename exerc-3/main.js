'use strict';
console.log('hola');

function handlerList() {
    fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(function(response) {
        console.log('response',response);
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