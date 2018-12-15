'use strict';
/**
 * La única diferencia entre el ejercicio 5 y el 6 es que la url de
 * la API usa `palettes.json` en lugar de `palette.json`
 */
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const remotePalettes = document.querySelector('.palettes');

/**
 * Esta función crea una lista desordenada con los colores como `background-color`
 * a partir de un array de colores que llega por parámetro, y la devuelve.
 */
const createPalete = (arr) => {
  let colors = '<ul class="card__colors">';
  for (const a of arr) {
    colors += `<li class="card__color" style="background-color:#${a}"></li>`;
  }
  colors += '</ul>';
  return colors;
};

/**
 * Esta función admite un parámetro, que es la lista de paletas,
 * e inyecta en nuestro contenedor tantos items como resultados haya en el array
 * Por comodidad he sacado la lista de colores a una función
 */
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
 * escribe la versión en consola.
 * Acepta un parámetro que es la url a la que se piden los datos
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
