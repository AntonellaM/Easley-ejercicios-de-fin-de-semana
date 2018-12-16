'use strict';

const palette = document.querySelector('.palette');
const urlApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

fetch(urlApi)
  .then(resp => resp.json())
  .then(data => {
    const colors = data.palettes[0].colors;

    for(const eachColor of colors) {
      const colorContent = `<div class="color__item" style="background-color:#${eachColor}"></div>`;
      palette.innerHTML += colorContent;
    }
  });
