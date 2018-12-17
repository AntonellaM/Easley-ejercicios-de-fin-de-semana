'use strict';

// console.log ('ready');

const containerEl = document.querySelector('.container');

function paintPalette (){
    fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then (response=> response.json())
    .then (data => {
        const arrayPalette = data.palettes;
        // console.log (arrayPalette)

        for (let i=0; i<arrayPalette.length; i++){
            let colorsArr = arrayPalette[i].colors;
            // console.log (colorsArr);

            for (let i=0; i<colorsArr.length; i++){
                let color = colorsArr[i];
                // console.log (color);

                containerEl.innerHTML+=`<li class="color__item" style="background-color:#${color}; height: 50px; width: 50px"></li`;
            }
            }
        }
        )
}

paintPalette();

const containerAllEl = document.querySelector('.containerAll');

function paintAllPalletes () {
    fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then (response => response.json())
    .then (data=> {
        const paletteArr = data.palettes;
        console.log (paletteArr)

        for (let i=0; i<paletteArr.length; i++){
            const paletteArrColors = paletteArr[i].colors;
            // console.log(paletteArrColors);

            containerAllEl.innerHTML += `<li>${paletteArr[i].name}</li>`


            for (let i=0; i<paletteArrColors.length; i++){
                const color = paletteArrColors[i];

                // console.log (color);

                containerAllEl.innerHTML+=`<li class="color__item" style="background-color:#${color}; height: 50px; width: 50px"></li`;

            }

        }
    })


}

paintAllPalletes ()


