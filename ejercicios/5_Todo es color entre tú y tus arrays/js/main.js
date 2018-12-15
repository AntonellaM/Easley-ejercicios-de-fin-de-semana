'use strict';

function printColors() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(response => response.json())
    .then(data => {
        let pallettesArr = data.palettes;
        let pallettesName = pallettesArr[0].name;
        let pallettesColorsArr = pallettesArr[0].colors;
        const title = document.querySelector('.title');
        const colorList = document.querySelector('.color-list');
        const titleContent = document.createTextNode(pallettesName);
        title.appendChild(titleContent);
        for (const color of pallettesColorsArr) {
            const colorBox = document.createElement('li');
            colorBox.setAttribute('class', 'block');
            colorList.appendChild(colorBox);
            colorBox.style.backgroundColor = `#${color}`;
            colorBox.style.boxShadow = `0 5px 25px 1px #${color}80`;
            colorBox.style.margin = `2px`;
        }
        
     });
}
printColors();
