'use strict';

const api = `https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json
`;

const btn = document.querySelector('.api-btn');

const item = () =>{
  fetch(api)
    .then(respuesta =>respuesta.json())
    .then(data=>{
    const contentColor = data.palettes;
    const [{colors}] = contentColor;
    console.log(colors);

  });
};

item();
