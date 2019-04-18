'use strict';

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


//ejercicio1

const container_list = document.querySelector('.news');

for (const arr of data) {
  //elementos
  const item_list = document.createElement('li');
  item_list.classList.add('news__item');
  const item_h2 = document.createElement('h2');
  item_h2.classList.add('news__title');
  const item_img = document.createElement('img');
  item_img.classList.add('news__image');

  //contenido
  const itemCont_h2 = document.createTextNode(arr.title);
  item_h2.appendChild(itemCont_h2);

  item_img.src = arr.image;
  item_img.alt = arr.title;

  item_list.appendChild(item_h2);
  item_list.appendChild(item_img);

  container_list.appendChild(item_list);
}

//ejercicio2

const arr_title = document.querySelectorAll('.news__item, .news__title');

for (const martians of arr_title) {
  
  if (martians.classList.contains('news__item') && martians.innerHTML.includes('Mars') || martians.innerHTML.includes('Martians')) {
    martians.classList.add('news__item--from-mars');
  }

}