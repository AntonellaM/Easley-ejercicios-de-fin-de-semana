'use strict';

const newsList = document.querySelector('.news');
let colorsContainer = document.querySelector('.colors-container');

function showImg(event){
  const clickedImg = event.currentTarget;
  clickedImg.classList.toggle('news__item--no-image-visible');
};

function martianNews() {
  const martian = document.querySelectorAll('.news__item');
  for (let i = 0; i < martian.length; i++) {
    martian[i].addEventListener('click', showImg);
    const martianItem = martian[i].firstChild.innerHTML;
      if (martianItem.includes('Mars') || martianItem.includes('Martian')) {
      martian[i].classList.add('news__item--from-mars');
    }
  }
};

function bringNews() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(response => response.json())
    .then(function showNews(data) {
      data = data.news;
      for (let i = 0; i < data.length; i++) {
        const newItem = document.createElement('li');
        newsList.appendChild(newItem);
        newItem.classList.add('news__item');
        newItem.classList.add('news__item--no-image-visible');
    
        const newTitle = document.createElement('h2');
        newItem.appendChild(newTitle);
        newTitle.classList.add('news__title');
        const newTitleContent = document.createTextNode(data[i].title);
        newTitle.appendChild(newTitleContent);
    
        const newImg = document.createElement('img');
        newItem.appendChild(newImg);
        newImg.classList.add('news__image');
        newImg.src = data[i].image;
        newImg.alt = data[i].title;
      }
      martianNews();
    })
}

function showColors(){
fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')

.then(response => response.json())
.then(function colorBox(data){
  const colorNumbers = data.palettes[0].colors;
  for (const color of colorNumbers){
    const newColorBox = document.createElement('div');
    newColorBox.classList.add('color__item');
    colorsContainer.appendChild(newColorBox);
    newColorBox.setAttribute('style', `background-color:#${color}`);
  }


}
)};

function showMoreColors(){
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(function showMore(data){
    const colorPalettes = data.palettes; 
    for(let i = 0; i < colorPalettes.length; i++){
      const newPalettes = data.palettes[i].colors;
      console.log(newPalettes);

      for (const color of newPalettes){
      const newColorBox = document.createElement('div');
      newColorBox.classList.add('color__item');
      colorsContainer.appendChild(newColorBox);
      newColorBox.setAttribute('style', `background-color:#${color}`);

   }
 } } ) }

showColors();
bringNews();
showMoreColors();



