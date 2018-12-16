'use strict';


const palettesContainer = document.querySelector('.palettes__container');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')

  .then(response=>response.json())

  .then(data=> {

    const palettes = data.palettes[0].colors;

    console.log(palettes);

    for(let i = 0; i<palettes.length; i++) {

      const colours = palettes[i];

      const divsContent = `<div class="color__item" style="background-color:#${palettes[i]}"></div>`;

      palettesContainer.innerHTML += divsContent;
    }
  });





