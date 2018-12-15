'use strict';

const urlFetch = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

// const palette = document.querySelector('.palette');
const paletteContainer = document.querySelector('.palette__container');

fetch (urlFetch)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const palettes = data.palettes;

    for(const palette of palettes) {
      const contentHTML = document.createElement('div');
      contentHTML.classList.add('palette');

      const content = paletteContainer.appendChild(contentHTML);

      const colors = palette.colors;
      for(let i=0; i<colors.length; i++) {
        const color = colors[i];
        const squareContent = `<div class="color__item" style="background-color:#${color}"></div>`;
        content.innerHTML += squareContent;
      }
    }
  });
