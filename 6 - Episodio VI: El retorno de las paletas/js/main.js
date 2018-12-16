'use strict';

const webApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const container = document.querySelector('.container');

function palette() {
  fetch(webApi)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.palettes.length; i++) {
        console.log(data.palettes[i].colors);
        container.innerHTML += `<li class="color__item"><h2>${data.palettes[i].name}</h2></li>`;
      }
      const colorItem = document.querySelectorAll('.color__item');
      for (const c of colorItem){
        c.innerHTML +=
      }
    });
}
palette();
