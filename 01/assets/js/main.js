'use strict';

// data

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

// helpers

function addClasses(el, className) {
  if (!!className) {
    el.classList.add(className);
  }
}

const createElement = (tagName, className) => {
  const el = document.createElement(tagName);
  addClasses(el, className);
  return el;
}

// global elements

const newsEl = document.querySelector('.news');

// news logic

function paintNews() {

  for (const newsItemData of data) {

    // newsItemData
    const { title, image } = newsItemData;
    /* Alternative:
    ** const title = newsItemData.title;
    ** const image = newsItemData.image;
    */

    // news item
    const newsItemEl = createElement('li', 'news__item');

    // news title
    const newsTitle = document.createTextNode(title);
    const newsTitleEl = createElement('h2', 'news__title');
    newsTitleEl.appendChild(newsTitle);

    // news image
    const newsImageEl = createElement('img', 'news__image');
    newsImageEl.src = image;
    newsImageEl.alr = title;

    // news
    newsItemEl.appendChild(newsTitleEl);
    newsItemEl.appendChild(newsImageEl);
    newsEl.appendChild(newsItemEl);

  }

}

paintNews();
