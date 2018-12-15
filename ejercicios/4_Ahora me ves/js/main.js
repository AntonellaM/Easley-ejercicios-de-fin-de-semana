'use strict';

const list = document.querySelector('.news');
let newline;
let newTitle;
let titleContent;
let newImage;
let titleText;
let wordMars = 'Mars';
let wordMartians = 'Martians';

function printNews() {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(response => response.json())
    .then(data => {
      const dataArr = data.news;
      for (const item of dataArr) {
        newline = document.createElement('li');
        newline.setAttribute('class', 'news__item news__item--no-image-visible');
        newTitle = document.createElement('h2');
        newTitle.setAttribute('class', 'news__title');
        titleContent = document.createTextNode(item.title);
        newTitle.appendChild(titleContent);
        newImage = document.createElement('img');
        newImage.setAttribute('class', 'news__image');
        newImage.setAttribute('alt', item.title);
        newImage.setAttribute('src', item.image);
        newline.appendChild(newTitle);
        newline.appendChild(newImage);
        list.appendChild(newline);
        let sentence = newTitle.innerHTML;

        newline.addEventListener('click', showImage);
        function showImage(e){
          e.currentTarget.classList.toggle('news__item--no-image-visible');
        }

        if (sentence.includes('Mars')) {
          newline.setAttribute('class', 'news__item news__item--from-mars news__item--no-image-visible');
        } else if (sentence.includes('Martians')) {
          newline.setAttribute('class', 'news__item news__item--from-mars news__item--no-image-visible');
        }
      }
    })
}
printNews();

