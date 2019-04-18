'use strict';

const list = document.querySelector('.news');
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

const newsMachine = arrayOfObjects => {
  for (let item of arrayOfObjects) {
    //CONTAINERS AND CLASSES
    const liItem = document.createElement('li');
    liItem.classList.add('news__item');
    const titleElement = document.createElement('h2');
    titleElement.classList.add('news__title');
    const imgElement = document.createElement('img');
    imgElement.classList.add('news__image');

    //CONTENT
    const titleContent = document.createTextNode(item.title);
    imgElement.src = item.image;
    imgElement.alt = `Image of ${item.title}`;

    //APPENCHILD
    list.appendChild(liItem);
    liItem.appendChild(titleElement);
    titleElement.appendChild(titleContent);
    liItem.appendChild(imgElement);
  }
}
newsMachine(data);