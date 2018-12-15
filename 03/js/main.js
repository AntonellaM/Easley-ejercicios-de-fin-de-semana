'use strict';

// Guardo la referencia al elemento donde voy a inyectar las noticias
const news = document.querySelector('.news');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
/**
 * Mejoro mi función flecha que escribe las noticias para que ahora reciba la url a la que se piden las noticias y la referencia al elemento html donde irán las noticias.
 * Una vez pintadas las noticias, llamo a mi antigua función que localiza noticias de Marte.
 */
const getWriteAndMarkMarsNews = (url, el) => {
  fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      let items = '';
      for (const d of data.news) {
        items += `
        <li class="news__item">
          <h2 class="news__title">${d.title}</h2>
          <img class="news__image" src="${d.image}" alt="${d.title}">
        </li>`;
      }
      el.innerHTML = items;

      // Llamo la función que marca las noticias de Marte
      markMartianNews();
    });

};

/**
 * Creo una función flecha que localice cada noticia (`.news__item`),
 * busco el título y comrpuebo si contiene 'Mars' o 'Martian'
 * y si lo tiene le coloco al elemento `.news__item` la clase `news__item--from-mars`.
 */
const markMartianNews = () => {
  const currentNews = news.querySelectorAll('.news__item');
  for (const c of currentNews) {
    const title = c.querySelector('.news__title').innerHTML;
    if (title.includes('Mars') || title.includes('Martian')) {
      c.classList.add('news__item--from-mars');
    }
  }
};

// Llamo a mi función y le pado el array de noticias y la referencia a mi lista `.news`
getWriteAndMarkMarsNews(api, news);
