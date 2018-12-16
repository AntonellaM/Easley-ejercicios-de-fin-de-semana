'use strict';
/******************* EJERCICIO 6 *********************/

function drawPalettes () {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      
      const colorPalettes = data.palettes; // en cada posición de este array, se almacena un objeto con su titulo y su paleta de colores
      
      addPaletteList(colorPalettes);
    
    });

}

/*Función que pinta la lista de paletas.
**Le pasamos por parámetro el array de objetos que hay en JSON que nos devuelve la petición
*/

function addPaletteList (colorPalettes) {
  
  const sectionPalettes = document.querySelector('.palette');
  let title;
  let colors;
  let titleAndWrapperElements;
  let palette; //cada cuadradito

  for (let i = 0; i < colorPalettes.length; i++) {
    
    title = colorPalettes[i].name;
    colors = colorPalettes[i].colors;
    palette = '';

    for (let j = 0; j < colors.length; j++) {
      //Añadimos los cuadraditos con cada uno de los colores
      palette += `<div class="color__item" id="color${j+1}" style="background-color:#${colors[j]}"></div>`;
    }

    //Añadimos los títulos y los wrapper (uno por cada paleta)
    titleAndWrapperElements += `
    <h2 class="palette__title">${title}</h2>
    <div class="colors__wrapper">
      ${palette}
    </div>`;
   
  }
  
  sectionPalettes.innerHTML = titleAndWrapperElements;
  
}

drawPalettes();
