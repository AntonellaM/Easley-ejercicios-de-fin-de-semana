'use strict';

const newsList = document.querySelector('.news');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

fetch(api)
  .then(r => r.json)
  .then(d => {
    const results = d.news;
    for (let i=0; i<results.length; i++) {
      const title = results[i].title;
      const image = results[i].image;

      const items = `<li class="news__item">
  // <h2 class="news__title">${title}</h2>
  // <img class="news__image" src=${image} alt=${title}>
  // </li>`;
      newsList.innerHTML += items;
    }
  });









  // for (let i = 0; i < data.length; i++) {
  //   const title = data[i].title;
  //   const image = data[i].image;
  //   const items = `<li class="news__item">
  // <h2 class="news__title">${title}</h2>
  // <img class="news__image" src=${image} alt=${title}>
  // </li>`;
  //   news.innerHTML += items;
  // };
