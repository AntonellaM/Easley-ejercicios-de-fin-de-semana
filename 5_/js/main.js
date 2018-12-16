'use strict';
const content = document.querySelector('.content');

const fetchFunction = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(resluts => resluts.json())
    .then(data => {
      const palette = data.palettes;
      const paletteName = palette[0].name;

      const contentTitle = document.createElement('div');
      const titleBox = document.createElement('h2');
      const titleText = document.createTextNode(paletteName);
      contentTitle.classList.add('content-title');
      titleBox.appendChild(titleText);
      contentTitle.appendChild(titleBox);
      content.appendChild(contentTitle);
      const contentColor = document.createElement('div');
      contentColor.classList.add('content-color');

      //palette colors
      const palleteColors = palette[0].colors;
      for (let color of palleteColors) {
        //console.log(color);

        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor =`#${color}`;
        colorBox.classList.add('colors-box');

        contentColor.appendChild(colorBox);
        content.appendChild(contentColor);
        console.log(content);
      }

    });
};

fetchFunction();