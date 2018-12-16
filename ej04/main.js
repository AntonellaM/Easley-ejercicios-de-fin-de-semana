'use strict';
const url= "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json";
const listNews = document.querySelector(".news");


fetch(url)
  .then(response => response.json())
  .then(d => {
    let data = d.news;
    printNews(data);
    resultMarcianos(); 
  })
 

function printNews(data) {
  for(let i = 0; i<data.length;i++){

  let title = data[i].title;
  let img = data[i].image;

  const itemList = document.createElement("li"); //new li
  itemList.classList.add("news__item"); // class for li
  itemList.classList.add("news__item--no-image-visible");
  itemList.addEventListener("click", handlerShowImg);

  const itemTitle = document.createElement("h2"); //create h2
  itemTitle.classList.add("news__title");  //add class Title
  itemTitle.innerHTML= title;
  itemList.appendChild(itemTitle);
 
  const itemImg = document.createElement("img"); //create image
  itemImg.classList.add("news__image"); //add class image
  itemImg.src=img;
  itemImg.alt=title;

  itemList.appendChild(itemImg);

  listNews.appendChild(itemList);
 
  } 
}


function resultMarcianos() {
  const allNews = document.querySelectorAll(".news__item");
  for(let i =0; i<allNews.length;i++){
    let titleNews = allNews[i].children[0].innerHTML;

    if(titleNews.includes("Mars")|| titleNews.includes("Martians")){
      allNews[i].classList.add("news__item--from-mars");
    }
  }
}

function handlerShowImg(e){
  const itemClicked = e.currentTarget;
  itemClicked.classList.toggle("news__item--no-image-visible");
}






