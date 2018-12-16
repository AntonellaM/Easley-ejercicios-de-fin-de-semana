'use strict';

/* Ejercicio 5 */

//Declare variables
const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';
const container = document.querySelector('.palette');

//Make the petition
fetch(url)
  .then(response => response.json())
  .then(data => {
    //Go through the array
    for (let i = 0; i < data.palettes[0].colors.length; i++) {
    //Create the content
      const content = ` <li class="color__item" style="background-color:#${data.palettes[0].colors[i] }"></li>`;
      //Insert content into HTML elements
      container.innerHTML += content;
    }
  });


