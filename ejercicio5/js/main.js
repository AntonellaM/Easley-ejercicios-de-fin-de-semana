'use strict';

const urlFetch = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

const palette = document.querySelector('.palette');

fetch (urlFetch)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const colors = data.palettes[0].colors;

    for(let i=0; i<colors.length; i++) {
      const color = colors[i];
      const squareContent = `<div class="color__item" style="background-color:#${color}"></div>`;
      palette.innerHTML += squareContent;
    }
  });
