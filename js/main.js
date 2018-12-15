'use strict';

/*const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

// Ejercicio 1

const newsList = document.querySelector('.news');

for(let ii = 0; ii < data.length; ii++) {
  const newLi = document.createElement('li');
  const newH2 = document.createElement('h2');
  const newImg = document.createElement('img');

  newLi.classList.add('news__item');
  newH2.classList.add('news_title');
  newImg.classList.add('news_image');

  const newsTitle = data[ii].title;
  const newsImage = data[ii].image;

  newImg.src = newsImage;
  newImg.setAttribute('alt', newsTitle);

  newH2.appendChild(document.createTextNode(newsTitle));
  newLi.appendChild(newH2);
  newLi.appendChild(newImg);

  newsList.appendChild(newLi);
}

// Ejercicio 2

const newsItem = document.querySelectorAll('.news__item');

for(let ii = 0; ii < newsItem.length; ii++) {

  if(newsItem[ii].innerHTML.includes('Mars') || newsItem[ii].innerHTML.includes('Martian')){
    newsItem[ii].classList.add('news__item--from-mars');
  }
}*/

// Ejercicio 3 y 4

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
  .then(response => response.json())
  .then(info => {
    const data = info.news;
    const newsList = document.querySelector('.news');

    for(let ii = 0; ii < data.length; ii++) {
      const newLi = document.createElement('li');
      const newH2 = document.createElement('h2');
      const newImg = document.createElement('img');

      newLi.classList.add('news__item');
      newLi.classList.add('news__item--no-image-visible'); //Ej 4
      newH2.classList.add('news__title');
      newImg.classList.add('news__image');

      const newsTitle = data[ii].title;
      const newsImage = data[ii].image;

      newImg.src = newsImage;
      newImg.setAttribute('alt', newsTitle);

      newH2.appendChild(document.createTextNode(newsTitle));
      newLi.appendChild(newH2);
      newLi.appendChild(newImg);

      newLi.addEventListener('click', toggleImage); //Ej 4

      newsList.appendChild(newLi);
    }

    const newsItem = document.querySelectorAll('.news__item');

    for(let ii = 0; ii < newsItem.length; ii++) {

      if(newsItem[ii].innerHTML.includes('Mars') || newsItem[ii].innerHTML.includes('Martian')){
        newsItem[ii].classList.add('news__item--from-mars');
      }
    }
  });

function toggleImage() { //Ej 4
  this.classList.toggle('news__item--no-image-visible');
}

//Ejercicio 5

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(response => response.json())
  .then(info => {
    const palette = info.palettes[0].colors;
    const paletteContainer = document.querySelector('.palette');

    for(let ii = 0; ii < palette.length; ii++) {
      const newLi = document.createElement('li');
      newLi.classList.add('color__item');

      const color = `#${palette[ii]}`;
      newLi.style.backgroundColor = color;

      paletteContainer.appendChild(newLi);
    }
  });

//Ejercicio 6

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(info => {
    const palettes = info.palettes;
    const palettesTogether = [];

    for(let ii = 0; ii < palettes.length; ii++) {

      for(let jj = 0; jj < palettes[ii].colors.length; jj++){
        palettesTogether.push(palettes[ii].colors[jj]);
      }
    }

    const palettesContainer = document.querySelector('.palettes');

    for(let ii = 0; ii < palettesTogether.length; ii++) {
      const newLi = document.createElement('li');
      newLi.classList.add('color__item');

      const color = `#${palettesTogether[ii]}`;
      newLi.style.backgroundColor = color;

      palettesContainer.appendChild(newLi);
    }
  });
