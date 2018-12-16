'use strict';
const news = document.querySelector('.news');

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

for (let i = 0; i < data.length; i++) {
  const title = data[i].title;
  const image = data[i].image;

  const items = `<li class="news__item">
<h2 class="news__title">${title}</h2>
<img class="news__image" src=${image} alt=${title}>
</li>`;

  items.classList.add('news__item--no-image-visible .news__image');

  news.innerHTML += items;

  showImage()
};
// const newsItem = document.querySelectorAll('.news__item');
// const newsImage = newsItem.querySelector('.news__image');

// function showImage() {
//   for()
//   newsImage.classList.toggle('news__item--no-image-visible');
// };

// newsItem.addEventListener('click', showImage);

//Me pasan:


function showImage() {
  const elements = document.querySelectorAll('.news__item');
  for (const element of elements) {
    element.addEventListener('click', handleClick);
  }
}
//ejecuta la funcion: showImage(); en la funcion de arriba de todo, donde pide las noticias.

function handleClick (e) {
  const culpable = e.currentTarget;
  culpable.classList.toggle('news__item--no-image-visible');
}

