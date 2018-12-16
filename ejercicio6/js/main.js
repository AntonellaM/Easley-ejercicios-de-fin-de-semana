'use strict';

const palette = document.querySelector('.palette');
const urlApi = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

fetch(urlApi)
  .then(resp => resp.json())
  .then(data => {

    //Recogemos en una constante los datos
    const shipsPalettes = data.palettes;

    //Con este bucle recorremos los objetos y recogemos de estos su nombre y el array de colores
    for(const eachPalette of shipsPalettes) {
      const {name, colors} = eachPalette;

      //En una variable creamos un elemento html donde metemos los nombres recogidos en el bucle
      let colorContent = `<h2>${name}<h2>`;

      //Dentro del bucle anterior, hacemos otro que nos recorra el array de colores y que nos lo concatene con la variable colorContent (este bucle lo suyo sería hacerlo con el mismo formato que el anterior)
      for (let i = 0; i <colors.length; i++) {
        colorContent += `<div class="color__item" style="background-color:#${colors[i]}"></div>`;
      }

      //En el div que tenemos en el index, pintamos el contenido recogido en los bucles
      palette.innerHTML += colorContent;
    }
  });
