'use strict';
/******************* EJERCICIO 5 *********************/
let colors = [];
fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
  .then(response => response.json())
  .then(data => {
    const colorPalette = data.palettes;
    console.log(colorPalette);

    for (let i=0; i < colorPalette.length; i++) {
      //ambas opciones son válidas
      // colors.push(colorPalette[i].colors);
      colors = colorPalette[i].colors
    }
    console.log('colores guardados dentro del fetch',colors);

    addColor(colors);

  });

  console.log('colores guardados fuera del fetch',colors);

  /**Función que añade el atributo style a un elemento del html 
   * por parámetro, se le pasa el array de colores: colors
  */
  function addColor (colors) {

    const boxes = document.querySelectorAll('.color__item');

    for ( let i = 0; i < colors.length; i++) {
      boxes[i].setAttribute('style',`background-color:#${colors[i]}`);

    }
  }