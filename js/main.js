'use strict';

const data = [{
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

const listEl = document.querySelector('.news');
// console.log (listEl);

function createList() {
  for (let i = 0; i < data.length; i++) {
    const dataImages = data[i].image;
    // console.log (dataImages);

    const dataTitles = data[i].title;
    // console.log (dataTitles);
    listEl.innerHTML += `
    <li class="news__item">
    <h2 class="news__title">${dataTitles}</h2>
    <img class="news__image" src=${dataImages} alt=${dataTitles}>
    </li>`;
  }
}

createList();

const itemEl = document.querySelectorAll('.news__item');
//  console.log (itemEl);

function highlightList() {
  for (let i = 0; i < itemEl.length; i++) {
    const itemName = itemEl[i].outerText;
    // console.log(itemName);

    if (itemName.includes('Martians')||itemName.includes('Mars')){
      itemEl[i].classList.add('news__item--from-mars');
    } else {
      console.log(`${itemName} doesnt include "Mars" nor "Martians"`);

    }
  }
}

highlightList();


// function highlightList (){
//   for (let i = 0; i<data.length; i++){
//     const dataTitles = data[i].title;
//     // console.log (dataTitles);

//     if (dataTitles[i].includes('Mars')){
//       itemEl.classList.add('news__item--from-mars','news__item--from-mars','news__item--from-mars');
//     } else {
//       // console.log (`${dataTitles} doesnt include Mars`);
//     }
//   }
// }
