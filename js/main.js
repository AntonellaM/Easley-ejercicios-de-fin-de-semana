'use strict';

const news = document.querySelector('.news');
const colorsContainer = document.querySelector('.list__colors-container');
const palettesContainer = document.querySelector('.palettes__container');
const input = document.querySelector('#search__input');

const newsUrl =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';
const palettesUrl =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const colorsUrl =
  'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';

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

const createElement = (element, classElement) => {
  const item = document.createElement(element);
  item.classList.add(classElement);
  return item;
};

const paintNews = array => {
  for (const item of array) {
    const { title, image } = item;
    const listItem = createElement('li', 'news__item');

    const listTitle = createElement('h2', 'news__title');
    const titleText = document.createTextNode(title);
    listTitle.appendChild(titleText);

    const listImage = createElement('img', 'news__image');
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

// checkMars();

// 3/ En el espacio nadie puede oir tus fetchs

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
    const listItem = createElement('li', 'news__item');
    listItem.classList.add('news__item--no-image-visible');

    const listTitle = createElement('h2', 'news__title');
    const titleText = document.createTextNode(title);
    listTitle.appendChild(titleText);

    const listImage = createElement('img', 'news__image');
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

// 5/ Todo es color entre tú y tus arrays...
const paintPalette = (colors, textHeader) => {
  const header = createElement('h2', 'color__header');
  const headerText = document.createTextNode(textHeader);
  header.appendChild(headerText);
  colorsContainer.appendChild(header);

  const colorList = createElement('ul', 'colors');
  colorsContainer.appendChild(colorList);

  for (const color of colors) {
    const listColor = createElement('li', 'color__item');
    listColor.setAttribute('style', `background-color:#${color}`);
    colorList.appendChild(listColor);
  }
};

const fetchColors = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        palettes: [{ colors, name }],
      } = data;
      paintPalette(colors, name);
    });
};

fetchColors(colorsUrl);

// 6/ Episodio VI: El retorno de las paletas

const paintPalettes = array => {
  for (const palette of array) {
    const { colors, name } = palette;

    const wrapperPalette = createElement('li', 'colors__container');
    const header = createElement('h2', 'color__header');
    const headerText = document.createTextNode(name);
    header.appendChild(headerText);
    addIcon(header); // add only for exercise 7
    wrapperPalette.appendChild(header);

    const colorList = createElement('ul', 'colors');

    // create pallete
    for (const color of colors) {
      const listColor = createElement('li', 'color__item');
      listColor.setAttribute('style', `background-color:#${color}`);
      colorList.appendChild(listColor);
    }
    wrapperPalette.appendChild(colorList);
    palettesContainer.appendChild(wrapperPalette);
  }
};

const fetchColorsPalettes = url => {
  const storageData = getFromStorage('palettes'); // add only for exercise 9
  if (!storageData) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { palettes } = data;
        saveInStorage('palettes', palettes); //  add only for exercise 9
        paintPalettes(palettes);
      });
  } else {
    paintPalettes(storageData);
  }
};

fetchColorsPalettes(palettesUrl);

// 7/ Mis paletas preferidas

function addIcon(element) {
  const icon = document.createElement('i');
  icon.classList.add('far', 'fa-heart', 'favorite');
  icon.addEventListener('click', () => {
    toggleFavorite(icon);
  });
  element.appendChild(icon);
}

function toggleFavorite(element) {
  element.classList.toggle('far');
  element.classList.toggle('fas');
}

// 8/ Buceando entre naves

const searchPalette = event => {
  const listPalettes = document.querySelectorAll('.colors__container');

  const {
    currentTarget: { value },
  } = event;
  for (const item of listPalettes) {
    const title = item.querySelector('.color__header');
    const titleText = title.childNodes[0].nodeValue; // get only text, not child element <i></i>

    if (titleText.includes(value)) {
      title.parentElement.classList.remove('hidden');
    } else {
      title.parentElement.classList.add('hidden');
    }
  }
};

input.addEventListener('keyup', searchPalette);

// 9/ ¡Caches a mi!

function saveInStorage(name, array) {
  localStorage.setItem(name, JSON.stringify(array));
}

function getFromStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}
