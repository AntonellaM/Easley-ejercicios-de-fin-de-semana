'use strict';

const newsList = document.querySelector('.news');

function martianNews() {
  const martian = document.querySelectorAll('.news__item');
  for (let i = 0; i < martian.length; i++) {
    const martianItem = martian[i].firstChild.innerHTML;
    console.log(martian[i]);
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

bringNews();




