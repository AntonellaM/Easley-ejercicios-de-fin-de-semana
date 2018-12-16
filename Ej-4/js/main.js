'use strict';
const newsEl = document.querySelector('.news');

function printNews() {

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(response => response.json())
    .then(data => {

      const dataEl = data.news;
      console.log('data', dataEl);
      let listNews = '';
      for (let i = 0; i < dataEl.length; i++) {
        listNews +=
          `<li class="news__item news__item--no-image-visible ">
          <h2 class="news__title">${dataEl[i].title}</h2>
          <img class="news__image" src="${dataEl[i].image}" alt="${dataEl[i].title}">
        </li>`;
      }
      newsEl.innerHTML = listNews;
      importantNews();
      addListenerEl();
    });

}

function importantNews() {
  const listNews = document.querySelectorAll('.news__item');
  console.log(listNews);
  for (let i = 0; i < listNews.length; i++) {
    const title = listNews[i].querySelector('.news__title').innerHTML;

    if (title.includes('Mars') || title.includes('Martian')) {
      listNews[i].classList.add('news__item--from-mars');
    }
  }

}

function showImg(event) {
  const currentnews = event.currentTarget;
  currentnews.classList.toggle('news__item--no-image-visible');
}

function addListenerEl() {
  const listNews = document.querySelectorAll('.news__item');
  for (const newItem of listNews) {
    newItem.addEventListener('click', showImg);
  }
}

printNews();
