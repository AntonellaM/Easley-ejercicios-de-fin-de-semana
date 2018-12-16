'use strict';

const webApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';
const container = document.querySelector('.container');

function palette() {
  fetch(webApi)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.palettes[0].colors.length; i++) {
        container.innerHTML += ` <li class="color__item" style="background-color:#${data.palettes[0].colors[i]}"></li>`;
      }
    })
}
palette();
