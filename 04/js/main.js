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
        <li class="news__item news__item--no-image-visible">
          <h2 class="news__title">${d.title}</h2>
          <img class="news__image" src="${d.image}" alt="${d.title}">
        </li>`;
      }
      el.innerHTML = items;

      // Llamo la función que marca las noticias de Marte
      markMartianNews();

      // Y llamo a la que hace la MAJIA!
      addClickListener();
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

/**
 * Esta es la función que ejecuta el navegador cuando la usuaria hace click.
 * Y lo que hace es intercambiar la clase que se ocupa de ocultar la imagen
 */
const showTheImage = (e) => {
  const item = e.currentTarget;
  item.classList.toggle('news__item--no-image-visible');
};

/**
 * Esta nueva función flecha me busca todas las noticias
 * y les añade un listener para el evento 'click':
 * llamará a la función `showTheImage()`
 */
const addClickListener = () => {
  const remoteNews = news.querySelectorAll('.news__item');
  for (const r of remoteNews) {
    r.addEventListener('click',showTheImage);
  }
};

// Llamo a mi función y le pado el array de noticias y la referencia a mi lista `.news`
getWriteAndMarkMarsNews(api, news);
