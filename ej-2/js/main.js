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

function paca() {
  for (let i = 0; i < data.length; i++) {
    const newTitle = document.createElement('h2');
    const newContent = document.createTextNode(`${data[i].title}`);
    const newImg = document.createElement('img');
    const listElement = document.createElement('li');
    newImg.src = data[i].image;
    newImg.alt = data[i].title;
    newTitle.appendChild(newContent);
    listElement.appendChild(newTitle);
    listElement.appendChild(newImg);
    list.appendChild(listElement);
    //Añadimos las clases a cada elemento
    listElement.setAttribute('class', 'news__item');
    newTitle.setAttribute('class', 'news__title');
    newImg.setAttribute('class', 'news__image');
  }
}

paca();

const itemClass = document.querySelectorAll('.news__item');

function mars(){
  // for (let i = 0; i < titleItem.length; i++){
  //   marsArray.push(titleItem[i].innerHTML);

  for (const c of itemClass){
    const title = c.querySelector('.news__title').innerHTML;
    console.log(title)

    if(title.includes('Mars') || title.includes('Martian')){
      c.classList.add('news__item--from-mars');
  }
  }
}

mars();












// //Carlos
// const markMartianNews = () => {
//   for (const c of currentNews) {
//     const title = c.querySelector('.news__title').innerHTML;
//     if (title.includes('Mars') || title.includes('Martian')) {
//       c.classList.add('news__item--from-mars');
//     }
//   }
//  };

