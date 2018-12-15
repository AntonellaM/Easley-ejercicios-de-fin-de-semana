'user strict';

const newsElement = document.querySelector('.news');

function getNews() {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const newsItem = data.news;
      for (const arrNews of newsItem) {
        newsElement.innerHTML +=  `<li class="news__item--no-image-visible">
        <h2 class="news__title">${arrNews.title}</h2>
        <img class="news__image" src=${arrNews.image} alt=${arrNews.title}>
        </li>`;
      }
      let allNews = document.querySelectorAll('.news__item--no-image-visible');
      function tryElement(e) {
        if (e.currentTarget = '.news__item--no-image-visible') {
          e.currentTarget.classList.toggle('news__item--no-image-visible');
        } 
      }
        for (let i = 0; i < allNews.length; i++) {
        allNews[i].addEventListener('click', tryElement);
      }
     
    });
   
}

getNews();

