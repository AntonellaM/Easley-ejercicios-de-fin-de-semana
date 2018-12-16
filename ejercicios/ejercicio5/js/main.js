'use strict';

const paletteElement = document.querySelector('.palette');
const titleElement = document.querySelector('.title');

function paintPalette () {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let arrData = data.palettes;
      for (const getColors of arrData) {
        let finalColors = getColors.colors;
        const getName = getColors.name.split(' ');
        titleElement.innerHTML = getName[0] + ' ' + getName[1];
        for (const printColors of finalColors) {
          paletteElement.innerHTML += `<div class="color__item" style="background-color:#${printColors}"></div>`;
        }
      }
    });


}

paintPalette();