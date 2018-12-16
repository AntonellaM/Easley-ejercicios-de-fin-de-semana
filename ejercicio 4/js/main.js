'use strict';

const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

fetch(api)
  .then(r=>r.json)
  .then(data=>
    data.palettes
    )







/* <div class="color__item" style="background-color:#ffcc00"></div> */


// lo que me devuelve la api:

// {
//   "version": "v0.0.0",
//   "palettes": [
//     {
//       "name": "Space Ship 1",
//       "colors": [
//         "FFBF2E",
//         "E85E0C",
//         "FF0000",
//         "C70CE8",
//         "330DFF"
//       ]
//     }
//   ]
// }
