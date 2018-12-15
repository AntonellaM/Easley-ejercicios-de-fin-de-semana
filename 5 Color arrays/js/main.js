'use strict';

// Esta vez tenemos una URL https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json
//que nos devuelve datos de una paleta y tenemos que pintarla como en el ejemplo:
// Pero hay uno requisito:

// Podemos crear los estilos que estimemos oportunos pero el color de la paleta lo añadiremos con un atributo style="" en cada cuadrado, es decir, si cada cuadrado fuese un div podría quedar algo así:
// <div class="color__item" style="background-color:#ffcc00"></div>
// De esta manera aplicaremos el color a cada cuadrado.

//necesito un div que contenga un h2, un texto y otro div donde van dentro los colores.
//necesito un fetch para sacar palettes. tenemos un objeto con un key(palettes). Ese key tiene como valor un array. El array tiene un objeto. Ese objeto tiene tres keys. Quiero name, from y colors. Colors ademas como valor tiene otro array con 5 elementos.
const palettes = document.querySelector('.palettes');

function createElement(tag, classEl){
  const newElement = document.createElement(tag);
  newElement.classList.add(classEl);
  return newElement;
}

function createText(text){
  const newText = document.createTextNode(text);

  return newText;
}

function appendText(tag, classEl, text){
  const newElCreated = createElement(tag, classEl);
  const newTextCreated = createText(text);
  newElCreated.appendChild(newTextCreated);
  return newElCreated;
}

function createColorBox(colorList){
  const ulBox = createElement('ul', 'ul-wrapper');
  for(const color of colorList){
    let liBox = createElement('li', 'li-color');
    let divBox = createElement('div', 'div-color');
    liBox.appendChild(divBox);
    divBox.style.backgroundColor = color;
    ulBox.appendChild(liBox);
  }
  return ulBox;
}


function createPalette(name, from, colors){
  const newName = appendText('h2', 'title', name);
  const newFrom = appendText('p', 'from', from);
  const newColorBox = createColorBox(colors);
  console.log(newName, newFrom, newColorBox);
  palettes.appendChild(newName);
  palettes.appendChild(newFrom);
  palettes.appendChild(newColorBox);
}

createPalette('emma', 'pakito', ['green', 'yellow']);



// fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json')
//   .then(response => response.json())
//   .then(function(data){

//   })