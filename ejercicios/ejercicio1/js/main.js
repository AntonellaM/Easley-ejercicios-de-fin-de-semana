'use strict';

const newsElement = document.querySelector('.news');

function printNews() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/js/main.js')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (const newsItem of data) {
            newsElement.innerHTML = `<li class="news__item">
            <h2 class="news__title">${data.title}</h2>
            <img class="news__image" src=${data.image}alt=${data.title}></li>`
        }
        });

}
printNews();
