'use strict';

//tenemos una URL que nos devuelve datos de una paleta y tenemos que pintarla
//el color de la paleta lo añadiremos con un atributo style="" en cada cuadrado,

const div = document.querySelector('.palettes');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  const palettes = data.palettes;

  ///generamos los cuadrados base donde se pintarán las paletas con sus nombres correspondientes
  for(let i=0; i<palettes.length; i++){

    div.innerHTML += `<div class="palette-name">${palettes[i].name}</div><div class="palette ${palettes[i].name}"></div>`;
    let colors = palettes[i].colors;
    let divPalette = div.querySelectorAll('.palette');
    // me gustaría que lo siguiente funcionase con: let divPalette = div.querySelector(`.${palettes[i].name}`);
    //pero no funciona :(, así que dejo el querySelectorAll

    //generamos los colors-items!
    for(let j=0; j<colors.length; j++){
      divPalette[i].innerHTML += `<div class="color__item" style="background-color:#${colors[j]}"></div>`;
    }

  }
})








