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


const listNews = document.querySelector(".news");

for(let i = 0; i<data.length;i++){

  let title = data[i].title;
  let img = data[i].image;

  const itemList = document.createElement("li"); //new li
  itemList.classList.add("news__item"); // class for li

  const itemTitle = document.createElement("h2"); //create h2
  itemTitle.classList.add("news__title"); //add class Title
  itemTitle.innerHTML= title;
  itemList.appendChild(itemTitle);
 
  const itemImg = document.createElement("img"); //create image
  itemImg.classList.add("news__image"); //add class image
  itemImg.src=img;
  itemImg.alt=title;
  itemList.appendChild(itemImg);

  listNews.appendChild(itemList);
}

function resultMarcianos() {

  const allNews = document.querySelectorAll(".news__item");
  console.log(allNews)
  for(let i =0; i<allNews.length;i++){
    let titleNews = allNews[i].children[0].innerHTML;

    if(titleNews.includes("Mars")|| titleNews.includes("Martians")){
      console.log(allNews[i])
      allNews[i].classList.add("news__item--from-mars");
    }
  }
}

resultMarcianos();