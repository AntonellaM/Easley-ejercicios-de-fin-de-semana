'use strict';
console.log('ejercicio 5');

const urlApi = `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json`;

const ul = document.querySelector('.palette__container');

const paintPalettes = function(par){
    fetch (par)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    console.log(data.palettes[0].colors[2]);
    const arColors = data.palettes[0].colors;
    console.log(arColors);
    for (const colors of arColors) {
      ul.innerHTML += `<div class="item-palette" style="background-color:#${colors}"></div>`;
    }
  });
}

paintPalettes(urlApi);