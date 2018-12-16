'use strict';

// EJERCICIO 1-2
// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

// const listEl = document.querySelector('.news');

// function printNews () {
//   for (let i=0 ; i<data.length ; i++) {
//     listEl.innerHTML += `<li class="news__item">
//       <h2 class="news__title">${data[i].title}</h2>
//       <img class="news__image"src="${data[i].image}" alt="${data[i].title}">`;
//   }
//   styleMarcianos();
// }

// function styleMarcianos () {
//   const itemsMars = document.querySelectorAll('.news-item');

//   for (const item of itemsMars){
//       if (item.innerHTML.includes('Mars')|| item.innerHTML.includes('Martian')){
//         item.classList.add('news__item--from-mars');
//       }
//   }
// }
// printNews();


// EJERCICIO 3-4
// const listEl = document.querySelector('.news');
// const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

// function printNews() {
//   fetch(url)
//     .then(res => res.json())
//     .then(dataNews => {
//       // console.log(dataNews);
//       const newsData = dataNews.news;
//       // console.log(newsData);
//       // for (let i = 0; i<newsData.length ; i++){
//       //   listEl.innerHTML += `<li class="news__item news__item--no-image-visible" >
//       //   <h2 class="news__title">${newsData[i].title}</h2>
//       //   <img class="news__image" src="${newsData[i].image}" alt="${newsData[i].title}">
//       //   </li>`;
//       // }
//       for (const newData of newsData) {

//         const newItem = document.createElement('li');
//         newItem.classList.add('news__item', 'news__item--no-image-visible');

//         const newTitle = document.createElement('h2');
//         newTitle.classList.add('news__title');

//         const textTitle = document.createTextNode(newData.title);

//         newTitle.appendChild(textTitle);

//         const newImg = document.createElement('img');
//         newImg.classList.add('news__image');
//         newImg.setAttribute('src',newData.image);
//         newImg.setAttribute('alt',newData.title);

//         newItem.appendChild(newTitle);
//         newItem.appendChild(newImg);

//         listEl.appendChild(newItem);
//       }
//     });
// }

// function handleRemoveClass(event) {
//   const selectNew = event.target;
//   // console.log(selectNew);
//   // console.log (event);
//   if (event.target.classList.contains('news__item')) {
//     selectNew.classList.toggle('news__item--no-image-visible');
//   } else {
//     const parentElement = selectNew.parentElement;
//     // console.log(parentElement);
//     parentElement.classList.toggle('news__item--no-image-visible');
//   }
// }
// printNews();
// listEl.addEventListener('click', handleRemoveClass);

// EJERCICIO 5
// const containerEl = document.querySelector('.container');

// const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json ';


// function printPalettes() {
//   fetch(url)
//     .then(response => response.json())
//     .then(dataPalettes => {
//       // console.log(dataPalettes);
//       const palette = dataPalettes.palettes;
//       // console.log(palette);

//       const titlePalette = document.createElement('h2');
//       titlePalette.classList.add('title');

//       const textTitle = document.createTextNode(palette[0].name);

//       titlePalette.appendChild(textTitle);

//       const containerPalette = document.createElement('div');
//       containerPalette.classList.add('container__colors');

//       containerEl.appendChild(titlePalette);
//       containerEl.appendChild(containerPalette);

//       const colorsPalette = palette[0].colors;
//       // console.log(colorsPalette);

//       for (let i=0 ; i<colorsPalette.length; i++){
//         const divColor = document.createElement('div');
//         divColor.classList.add('item__color');
//         divColor.style.backgroundColor = `#${colorsPalette[i]}`;

//         containerPalette.appendChild(divColor);
//       }
//     });
// }

// printPalettes();


const containerEl = document.querySelector('.container');
const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

function printPalettes() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log('data', data);
      const dataPalettes = data.palettes;
      // console.log('dataPalettes', dataPalettes);

      const titlePage = document.createElement('h1');
      const textTitlePage = document.createTextNode('Palettes of STAR WARS');
      titlePage.appendChild(textTitlePage);
      containerEl.appendChild(titlePage);
      
      for (let i = 0; i < dataPalettes.length; i++) {
        const divPalette = document.createElement('div');
        divPalette.classList.add('container__palette');

        const titlePalette = document.createElement('h2');
        const namePalette = document.createTextNode(dataPalettes[i].name);
        titlePalette.appendChild(namePalette);
        containerEl.appendChild(titlePalette);

        const subTittlePalette = document.createElement('h3');
        const fromPalette = document.createTextNode(`From: ${dataPalettes[i].from}`);
        subTittlePalette.appendChild(fromPalette);
        containerEl.appendChild(subTittlePalette);

        const containerPalette = document.createElement('div');
        containerPalette.classList.add('container__colors');
        containerEl.appendChild(containerPalette);

        const colorsPalette = dataPalettes[i].colors;
        // console.log('colorsPalette', colorsPalette);
        for (let color of colorsPalette) {
          const containerColor = document.createElement('div');
          containerColor.classList.add('item__color');
          containerColor.style.backgroundColor = `#${color}`;

          containerPalette.appendChild(containerColor);
        }
      }
    });
}

printPalettes();