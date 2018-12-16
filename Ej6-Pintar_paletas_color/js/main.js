'use strict';
/******************* EJERCICIO 6 *********************/

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(data => {
    
    const colorPalettes = data.palettes; // en cada posición de este array, se almacena un objeto con su titulo y su paleta de colores

    /**Todo esto hace lo mismo que la línea anterior 
     for (let i = 0; i < data.palettes.length; i++) {
       colorPalette[i] = data.palettes[i];
     }
    */
    let names = []; // cada posicion d este array corresponde al título de cada paleta
    let colors = [];// cada posición de este array corresponde con los colores de una de las paletas de color
    console.log('paletas',colorPalettes);

    //nos metemos dentro de cada paleta, y vamos almacenando: su nombre y sus colores
    for (let i=0; i < colorPalettes.length; i++) {
      names [i] = colorPalettes[i].name;
      colors[i] = colorPalettes[i].colors;
    }
    console.log('nombres guardados dentro del fetch',names);
    console.log('colores guardados dentro del fetch',colors);

    addPaletteList(colorPalettes);
    

  });

// console.log('colores guardados fuera del fetch',colors);


/*Función que pinta los div que necesitamos, dependiendo de las paletas de colores que existan en el repo
*le pasamos por parámetro un array de objetos paleta
*/


function addPaletteList (colorPalettes) {
  let title;
  let colors;
  const sectionPalettes = document.querySelector('.palette');
  let titleAndWrapperElements;
  let palette; //cada cuadradito

  for (let i = 0; i < colorPalettes.length; i++) {
    
    title = colorPalettes[i].name;
    colors = colorPalettes[i].colors;
    palette = '';

    for (let j = 0; j < colors.length; j++) {
      //Añadimos los div. Cada div pintara un color de la paleta
      palette += `<div class="color__item" id="color${j+1}" style="background-color:#${colors[j]}"></div>`;
    }

    //Añadimos los títulos y los wrapper (uno de cada por paleta)
    titleAndWrapperElements += `
    <h2 class="palette__title">${title}</h2>
    <div class="colors__wrapper">
      ${palette}
    </div>`;
   
  }
  sectionPalettes.innerHTML = titleAndWrapperElements;
  
}
