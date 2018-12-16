'use strict';

const container = document.querySelector('.container');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

fetch(api)
  .then(r =>r.json())
  .then(data => {
    const colors = data.palettes[0].colors;

    for (let i = 0; i < colors.length; i++) {
      const eachColor = colors[i];
      const box = `<div class="color__item" style="background-color:#${eachColor}"></div>`;
      container.innerHTML += box;
    }
  });
