'use strict';


const listEl = document.querySelector('.news');
const data = [
  {
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

/* Ejercicio 1, pintar el listado del array */
/*Ejercicio 2. Buscar todos los li que contengan la palabra mars o martian y añadirles una clase*/

 /* function writeListinDocument() {
  for(let i = 0; i<data.length; i++) {
    let listNews = `<li class="news__item">
    <h2 class="news__title">${data[i].title}</h2>
    <img class="news__image" src="${data[i].image}" alt="${data[i].title}">
    </li>`;
    listEl.innerHTML += listNews;
    }
  };

function remarkMartians() {
  const news = document.querySelectorAll('.news__item');
  console.log(news);
  for (const impNews of news) {
    if(impNews.innerHTML.includes('Mars') || impNews.innerHTML.includes('Martians')) {
      impNews.classList.add('news__item--from-mars')
    }
  }

};
  
writeListinDocument();
remarkMartians();  */

/*Ejercicio 3 y 4. Pintar las noticias pero desde la URL*/


function getNews() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(res => res.json())
    .then(news => {
      const internationalNews = news.news;

      for(let i = 0; i<internationalNews.length; i++) {
        let spaceNews= `<li class="news__item news__item--no-image-visible">
        <h2 class="news__title">${internationalNews[i].title}</h2>
        <img class="news__image " src="${internationalNews[i].image}" alt="${internationalNews[i].title}">
        </li>`;
        listEl.innerHTML += spaceNews;
      }
});
}

function handleRemoveClass(event) {
  const newSelect = event.target;
  if(newSelect.classList.contains('.news__item')) {
    newSelect.classList.toggle('news__item--no-image-visible');
  } else {
    const parentElement = newSelect.parentElement;
    parentElement.classList.toggle('news__item--no-image-visible');
  }

};


getNews(); 
listEl.addEventListener('click', handleRemoveClass);









    
 

/*Ejercicio 5*/
/* const divEl = document.querySelector('.color');

function paintPalette() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(res => res.json())
    .then(palete => {
      
      const paleteColors = palete.palettes[0].colors;
     
      for (let i = 0; i<paleteColors.length; i++) {
        divEl.innerHTML += `<div class="color__item" style="background-color:#${paleteColors[i]}"></div>`;
      }
    })
};

paintPalette();

/*Ejercicio 6 */

/* const divColorEl = document.querySelector('.ul_color');
const colorsEl = document.querySelector('.paintcolors');

function paintAllColors() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(res => res.json())
    .then(colordata => {
      
      const colordataList = colordata.palettes;
      
      for (let i = 0; i<colordataList.length; i++) {
        
        const colorsList = colordataList[i].colors;
       console.log(colorsList);
       colorsEl.innerHTML += `<div class="color__item" style="background-color:#${colorsList[i]}"></div>`;
      }
      
      for(let i = 0; i<colordataList.length; i++) {
        let colorDataName = colordataList[i].name;
        divColorEl.innerHTML += `<h3>${colordataList[i].name}</h3> <div> `;
        
        /* const arrayOfColors = colordataList[i].colors;
        const [item1, item2, item3, item4, item5] = arrayOfColors;
        for (let i = 0; item1.length; i++) {
          colorsEl.innerHTML += `<div class="color__item" style="background-color:#${item1[i]}"></div>`;
        } */
     /*  }
        
              
    })
};

paintAllColors();  */
  