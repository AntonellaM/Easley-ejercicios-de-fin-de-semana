'use strict';
const url= "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json";
const palette = document.querySelector(".palette");


fetch(url)
  .then(response => response.json())
  .then(d => {
    let palettes = d.palettes;
    let colors = palettes[0].colors; //array whit colors
    return colors;
  })
  .then(colors=>{
    printPalette (colors);

  })
 

function printPalette (colors) {

for(let i = 0; i<colors.length;i++){
  
  let itemPalette = document.createElement("li"); //new li
  let itemColor = document.createElement("div"); //new div
  itemColor.classList.add("color");
  itemColor.style.backgroundColor=`#${colors[i]}`;
  itemPalette.appendChild(itemColor); 

  palette.appendChild(itemPalette);
}
  
}