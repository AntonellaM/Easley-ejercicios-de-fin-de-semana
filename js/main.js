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

const ulEl = document.querySelector('.news');
const palettesSectionEl = document.querySelector('.palettes');
const searchInputEl = document.querySelector('.search__input');
const newsLocalStorage = 'newsCache';
const singlePaletteStorage = 'singlePaletteCache';
const multiplePalettesStorage = 'multiplePaletteCache';

function hiddenImages(event) {
  event.currentTarget.classList.toggle('news__item--no-image-visible');  
}

function paletteClickHandler(event) {
  event.currentTarget.classList.toggle('favorite-palette');
}

function getItemsFromURL (data) {
  for (const newsItem of data) {

    const liEl = document.createElement('li');
    const titleEl = document.createElement('h2');
    const imgEl = document.createElement('img');
    const text = document.createTextNode(newsItem.title);

    if (newsItem.title.includes('Mars') || newsItem.title.includes('Martian')) {

      liEl.classList.add('news__item');
      liEl.classList.add('news__item--from-mars');
      liEl.classList.add('news__item--no-image-visible');
      titleEl.classList.add('news__title');
      imgEl.classList.add('news__image');
      imgEl.src = newsItem.image;
      imgEl.alt = newsItem.title;

    } else {

      liEl.classList.add('news__item');
      liEl.classList.add('news__item--no-image-visible');
      titleEl.classList.add('news__title');
      imgEl.classList.add('news__image');
      imgEl.src = newsItem.image;
      imgEl.alt = newsItem.title;

    }

    titleEl.appendChild(text);
    liEl.appendChild(titleEl);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);

    liEl.addEventListener('click', hiddenImages);
  }
}

function paintColors(palettes) {

  for (const palette of palettes) {
    const divPaletteContainer = document.createElement('div');
    const nameEl = document.createElement('h3');
    const paletteTitle = document.createTextNode(palette.name);
    nameEl.appendChild(paletteTitle);
    nameEl.classList.add('palette__title');
    divPaletteContainer.appendChild(nameEl);
    const divColorContainerEl = document.createElement('div');
    divPaletteContainer.appendChild(divColorContainerEl);
    divPaletteContainer.addEventListener('click', paletteClickHandler);

    for (const color of palette.colors) {
      const divColorEl = document.createElement('div');
      divColorEl.classList.add('color__square');
      divColorEl.setAttribute(`style`, `background-color: #${color};`);
      divColorContainerEl.appendChild(divColorEl);
      divColorContainerEl.classList.add('color__container');
    }

    palettesSectionEl.appendChild(divPaletteContainer);
  }
} 

function searchKeyUpHandler(event) {
  const nameEl = document.querySelectorAll('.palette__title');
  const search = event.currentTarget.value.toLowerCase();
  for (const name of nameEl) {
    const nameContent = name.innerHTML.toLowerCase();
    if (nameContent.includes(search)) {
      name.parentElement.classList.remove('search-no-display');
    } else {
      name.parentElement.classList.add('search-no-display');
    }
  }
}

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(function (data) {
    if (localStorage.getItem(newsLocalStorage)) {
      const newsFromCache = JSON.parse(localStorage.getItem(newsLocalStorage));
      getItemsFromURL(newsFromCache.news);
    } else {
      localStorage.setItem(newsLocalStorage, JSON.stringify(data));
      getItemsFromURL(data.news);
    }});

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(response => response.json())
  .then(function (data) {
    if (localStorage.getItem(singlePaletteStorage)) {
      const singlePaletteFromCache = JSON.parse(localStorage.getItem(singlePaletteStorage));
      paintColors(singlePaletteFromCache.palettes);
    } else {
      localStorage.setItem(singlePaletteStorage, JSON.stringify(data));
      paintColors(data.palettes);
    }
  });

fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(function (data) {
    console.log(data);
    if (localStorage.getItem(multiplePalettesStorage)) {
      const multiplePalettesFromCache = JSON.parse(localStorage.getItem(multiplePalettesStorage));
      console.log(multiplePalettesFromCache);
      paintColors(multiplePalettesFromCache.palettes);
    } else {
      localStorage.setItem(multiplePalettesStorage, JSON.stringify(data));
      paintColors(data.palettes);
    }
  });

searchInputEl.addEventListener('keyup', searchKeyUpHandler);