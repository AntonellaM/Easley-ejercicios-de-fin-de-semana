
'use strict';

const palettesContainer = document.querySelector('.palettes__container');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')

  .then(response=>response.json())

  .then(data=> {

    const palettesArray = data.palettes;

    for (let i = 0; i<data.palettes.length; i++) {

      const palettesColors = palettesArray[i].colors;

      console.log(palettesColors);


      const palettesElements = `<div class="color__item" style="background-color:#${palettesColors[i]}">hola</div>`;

      console.log(palettesElements);

      palettesContainer.innerHTML += palettesElements;
    }
  });



