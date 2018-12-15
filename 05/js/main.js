'use strict';

const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';
const remotePalettes = document.querySelector('.palettes');

const createPalete = (arr) => {
  let colors = '<ul class="card__colors">';
  for (const a of arr) {
    colors += `<li class="card__color" style="background-color:#${a}"></li>`;
  }
  colors += '</ul>';
  return colors;
};

const writePalettes = (arr) => {
  let items = '';
  for (const a of arr) {
    const {name, colors} = a;
    items += `
      <li class="palette">
        <div class="card">
          <h2 class="card__name">${name}</h2>
          ${createPalete(colors)}
        </div>
      </li>
    `;
  }
  remotePalettes.innerHTML = items;
};

/**
 * Esta función flecha pide las paletas a la API,
 * escribe la versión en consola
 * @param {*} url
 */
const getPalettes = (url) => {
  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      const {version, palettes} = data;
      console.log('Version:', version);

      writePalettes(palettes);
    });
};


getPalettes(api);
