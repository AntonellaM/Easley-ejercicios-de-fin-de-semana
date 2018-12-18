'use strict';

/* Ejercicio 6 */

//Declare variables
const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const container = document.querySelector('.palettes');

//Make the petition
fetch(url)
  .then(response => response.json())
  .then(data => {
    //Go through the first array
    for (let i = 0; i < data.palettes.length; i++) {
    //Store in variables the content needed
      const name = data.palettes[i].name;
      const colors = data.palettes[i].colors;

      //Create the content for names
      let content = `<h2 class="title">${name}</h2>`;

      //Go through the second array
      for (let j = 0; j < colors.length; j++) {
        //Create the content for colors
        content += `<div class="color__item" style="background-color:#${colors[j]}"></div>`;
      }
      //Insert content into HTML elements
      container.innerHTML += content;
      console.log(container);
    }
  });

//Obs: the data is there but it doesn't show in the DOM. Try to fix it.


