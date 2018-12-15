'use strict';

//tenemos una URL que nos devuelve datos de una paleta y tenemos que pintarla
//el color de la paleta lo añadiremos con un atributo style="" en cada cuadrado,

const div = document.querySelector('.palettes');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  const palette = data.palettes;
  const name = palette[0].name;
  const colors = palette[0].colors;

  ///generamos los cuadrados base donde se pintarán las paletas con sus nombres correspondientes
  div.innerHTML += `<div class="palette-name">${name}</div><div class="palette ${name}"></div>`;

  let divPalette = div.querySelector('.palette');

  //generamos los colors-items!
  for(let i=0; i<colors.length; i++){

    divPalette.innerHTML += `<div class="color__item" style="background-color:#${colors[i]}"></div>`;

  }
})








