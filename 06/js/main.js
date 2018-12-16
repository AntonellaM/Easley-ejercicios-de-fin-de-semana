'use strict';
console.log('ejercicio 6');

const urlApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const container = document.querySelector('.palette__container');
const paintPalettes = (para1) => {
  fetch(para1)
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    const palettes = data.palettes;
    //console.log(data.palettes);
   for (let i=0;i<palettes.length;i++){
     for (let j=0;j<palettes[i].colors.length;j++){
        console.log(palettes[i].colors[j]);
        console.log(container);
        container.innerHTML += `<div class="item-palette" style="background-color:#${palettes[i].colors[j]}"></div>`;
     }
   }
  });
}

paintPalettes(urlApi);