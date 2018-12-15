'use strict';
const ulContent = document.querySelector('.news');

const handleContent = (event) => {
  const selected = event.target;
  // console.log(selected);
  // console.log(event);
  if (event.target.tagName === 'LI') {
    selected.classList.remove('news__item--no-image-visible');
  } else {
    const parent = selected.parentElement;
    parent.classList.remove('news__item--no-image-visible');
  }
};

const fetchApp = () => {
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      const allData = data.news;

      for (let listData of allData) {

        const newList = document.createElement('li');
        newList.classList.add('news__item', 'news__item--no-image-visible');

        const newTitle = document.createElement('h2');
        const eachTitleText = document.createTextNode(listData.title);
        newTitle.appendChild(eachTitleText);
        newTitle.classList.add('news__title');

        const newImg = document.createElement('img');
        newImg.classList.add('news__image');
        newImg.setAttribute('src', listData.image);
        newImg.setAttribute('alt', listData.title);

        newList.appendChild(newTitle);
        newList.appendChild(newImg);

        ulContent.appendChild(newList);

        const titleEl = listData.title;
        if (titleEl.includes('Mars') || titleEl.includes('Martian')) {
          newTitle.classList.add('news__item--from-mars');
        }
      }
    });
};

fetchApp();
ulContent.addEventListener('click', handleContent);