'use strict';

// helpers

function addClasses(el, classNames) {
  if (!classNames) {
    return false;
  }

  if (typeof classNames === 'string') {
    el.classList.add(classNames);
  } else if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  }
}

const createElement = (tagName, classNames) => {
  const el = document.createElement(tagName);
  addClasses(el, classNames);
  return el;
}

const isAnyWordInString = (wordsToFind, stringToSearchIn) => {
  let match = false;
  for (const word of wordsToFind) {
    if (stringToSearchIn.includes(word)) {
      match = true;
    }
  }
  return match;
}

// global elements

const newsEl = document.querySelector('.news');

// getNews

function getNews() {
  const newsUrl = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
  fetch(newsUrl)
    .then(res => res.json())
    .then(paintNews)
    .then(function () {
      highlightNews(['Mars', 'Martians'], 'news__item--from-mars')
    })
}

// new item click logic

function showHideNewsImage(newsItemEl) {
  newsItemEl.classList.toggle('news__item--no-image-visible');
}

function handleNewsItemClick(event) {
  const currentNewsEl = event.currentTarget;
  showHideNewsImage(currentNewsEl);
}

// news logic

function paintNews(data) {

  const { news } = data;

  for (const newsItem of news) {

    // newsItem
    const { title, image } = newsItem;
    /* Alternative:
    ** const title = newsItemData.title;
    ** const image = newsItemData.image;
    */

    // news item
    const newsItemEl = createElement('li', ['news__item', 'news__item--no-image-visible']);
    newsItemEl.addEventListener('click', handleNewsItemClick);

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

function highlightNews(keyWords, newClass) {
  // news
  const newsItemEls = document.querySelectorAll('.news__item');
  for (const newsItemEl of newsItemEls) {
    const titleEl = newsItemEl.querySelector('.news__title');
    const title = titleEl.innerHTML;
    if (isAnyWordInString(keyWords, title)) {
      newsItemEl.classList.add(newClass);
    }
  }
}

getNews();
