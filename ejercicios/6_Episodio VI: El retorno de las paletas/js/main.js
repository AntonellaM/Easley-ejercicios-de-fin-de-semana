'use strict';

const list = document.querySelector('.list');

function printColors() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response => response.json())
    .then(data => {
        const palettes = data.palettes;
        // console.log(palettes);
        for (const palette of palettes) {
            // console.log(palette);
            const paletteName = palette.name;
            // console.log(paletteName);
            const newLine = document.createElement('li');
            const newTitle = document.createElement('h1');
            newTitle.style = 'margin: 50px auto 20px;'
            const paletteTitle = document.createTextNode(paletteName);
            newLine.appendChild(newTitle);
            newTitle.appendChild(paletteTitle);
            list.appendChild(newLine);
            const paletteColorArr = palette.colors;
            for (const colorPalette of paletteColorArr) {
            const newBox = document.createElement('div');
            newBox.setAttribute('class', 'box');
            newBox.style =`margin: 5px; background-color: #${colorPalette}; box-shadow: 0 2px 15px 2px #${colorPalette}90;`;
            newLine.appendChild(newBox);
            }
        }
    })

}
printColors();