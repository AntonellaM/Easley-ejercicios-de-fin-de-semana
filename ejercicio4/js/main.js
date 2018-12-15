'use strict';

const listContainer = document.querySelector('.list__container');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const news = data.news;
    for(let i=0; i<news.length; i++) {
      const title = news[i].title;
      const image = news[i].image;

      const contElement = `<li class="news__item news__item--no-image-visible">
      <h2 class="news__title">${title}</h2>
      <img class="news__image" src="${image}" alt="${title}">
      </li>`;

      listContainer.innerHTML += contElement;
    }
    showImage();
  });

function showImage() {
  const elements = document.querySelectorAll('.news__item');

  for (const element of elements) {
    element.addEventListener('click', handler);
  }
}

const handler = (e) => {
  const guilty = e.currentTarget;
  guilty.classList.toggle('news__item--no-image-visible');
};

