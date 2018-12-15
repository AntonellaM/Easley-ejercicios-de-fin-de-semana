'user strict';

const newsElement = document.querySelector('.news');

function getNews() {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const newsItem = data.news;
      console.log(newsItem);
      for (const arrNews of newsItem) {
        newsElement.innerHTML +=  `<li class="news__item">
        <h2 class="news__title">${arrNews.title}</h2>
        <img class="news__image" src=${arrNews.image} alt=${arrNews.title}>
        </li>`;
      }
    });

}

getNews();