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
                console.log (color);

                containerEl.innerHTML+=`<li class="color__item" style="background-color:#${color}; height: 50px; width: 50px">hola</li`;


            }

            }


        }
        
        
        )

}

paintPalette();