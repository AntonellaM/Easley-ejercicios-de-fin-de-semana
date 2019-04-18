'use strict';

const news = document.querySelector('.news');

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100',
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100',
  },
];

// 1/ Listado de noticias
const paintNews = array => {
  for (const item of array) {
    const { title, image } = item;
    const listItem = document.createElement('li');
    listItem.classList.add('news__item');

    const listTitle = document.createElement('h2');
    listTitle.classList.add('news__title');
    const titleText = document.createTextNode(title);
    listTitle.appendChild(titleText);

    const listImage = document.createElement('img');
    listImage.classList.add('news__image');
    listImage.setAttribute('src', image);
    listImage.setAttribute('alt', title);

    listItem.appendChild(listTitle);
    listItem.appendChild(listImage);
    news.appendChild(listItem);
  }
};
// paintNews(data);

// 2/ Marte, el planeta rojo

const checkMars = () => {
  const listNews = document.querySelectorAll('.news__item');
  for (const item of listNews) {
    const title = item.querySelector('.news__title').innerHTML;
    if (title.includes('Mars') || title.includes('Martian')) {
      item.classList.add('news__item--from-mars');
    }
  }
};

checkMars();

// 3/ En el espacio nadie puede oir tus fetchs

const newsUrl =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const getNews = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { news } = data;
      paintNews(news);
      checkMars();
    });
};

// getNews(newsUrl);

// 4/ Ahora me ves...
const toggleImage = (element, classToToggle) => {
  element.classList.toggle(classToToggle);
};

const paintNewsWithoutImage = array => {
  for (const item of array) {
    const { title, image } = item;
    const listItem = document.createElement('li');
    listItem.classList.add('news__item');
    listItem.classList.add('news__item--no-image-visible'); // exercise 4

    const listTitle = document.createElement('h2');
    listTitle.classList.add('news__title');
    const titleText = document.createTextNode(title);
    listTitle.appendChild(titleText);

    const listImage = document.createElement('img');
    listImage.classList.add('news__image');
    listImage.setAttribute('src', image);
    listImage.setAttribute('alt', title);

    listItem.appendChild(listTitle);
    listItem.appendChild(listImage);
    // add event listenet to li
    listItem.addEventListener('click', () => {
      toggleImage(listItem, 'news__item--no-image-visible');
    });
    news.appendChild(listItem);
  }
};

const getNewsWithoutImage = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { news } = data;
      paintNewsWithoutImage(news);
      checkMars();
    });
};

getNewsWithoutImage(newsUrl);
