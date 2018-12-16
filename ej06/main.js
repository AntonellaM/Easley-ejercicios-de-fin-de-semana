'use strict';
const url= "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json";
const palettes = document.querySelector(".palettes");


fetch(url)
  .then(response => response.json())
  .then(d => {
    let allPalettes = d.palettes;
    return allPalettes;   
  })
  .then(allPalettes =>{
    printPalettes(allPalettes);
    
  })

 function printPalettes (allPalettes) {

  for (let i = 0; i<allPalettes.length;i++){ //paso por cada paleta
    let namePalette = allPalettes[i].name; //get name
    let colors = allPalettes[i].colors; // get array with color

    let eachPalette = document.createElement("li"); //new palette li
    eachPalette.classList.add("palette");
    palettes.appendChild(eachPalette);

    for (let i = 0; i<colors.length;i++){
    let itemColor = document.createElement("div"); //new div
    itemColor.classList.add("color");
    itemColor.style.backgroundColor=`#${colors[i]}`;
    eachPalette.appendChild(itemColor);
    }
  }
}



