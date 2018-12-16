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

function paintList() {
  for (let i = 0; i < data.length; i++) {
    const newTitle = document.createElement('h2');
    const newContent = document.createTextNode(`${data[i].title}`);
    const newImg = document.createElement('img');
    const listElement = document.createElement('li');
    listElement.className = 'news__item';
    newTitle.className = 'news__title';
    newImg.className = 'news__image';
    newImg.src = data[i].image;
    newImg.alt = data[i].title;
    newTitle.appendChild(newContent);
    listElement.appendChild(newTitle);
    listElement.appendChild(newImg);
    list.appendChild(listElement);
  }
};

paintList();

function writeMartians(){
  const selectList = list.querySelectorAll('.news__item');
  for (const n of selectList){
    const titleName = n.querySelector('.news__title').innerHTML;
    if(titleName.includes('Mars') || titleName.includes('Martians')){
      n.classList.add('news__item--from-mars');
    }
  }
};

writeMartians();

