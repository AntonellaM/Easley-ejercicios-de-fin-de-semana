'use strict';

const titleEl = document.querySelector('.title');
const listPaletteEl = document.querySelector('.list__palette');

function printPalette() {

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      const dataName = data.palettes[0].name;
      titleEl.innerHTML = dataName;
      console.log('data name', dataName);
      const dataPalette = data.palettes[0].colors;
      console.log('colors', dataPalette);
      printColors(dataPalette);
    });

}

function printColors(listItems) {
  let listColors = '';
  for (const item of listItems) {
    listColors += `<div class="color__item" style="background-color:#${item}"></div>`;
    console.log('colores', listColors);
  }
  listPaletteEl.innerHTML = listColors;
}

printPalette();
