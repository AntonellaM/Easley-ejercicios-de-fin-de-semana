'use strict';

const spaceshipsElement = document.querySelector('.spaceships');

function printSpaceships() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let arrPalettes = data.palettes;
      for (const arrColors of arrPalettes) {
        let finalColors = arrColors.colors;
        spaceshipsElement.innerHTML += `<h2 class="title">${arrColors.name}</h2>`;
        spaceshipsElement.innerHTML += `<h2 class="from">${arrColors.from}</h2>`;
        for (let i = 0; i < finalColors.length; i++) {
          spaceshipsElement.innerHTML += `<li class="color__item" style="background-color:#${finalColors[i]}"></li>`;
        }
      }
    });
}

printSpaceships();