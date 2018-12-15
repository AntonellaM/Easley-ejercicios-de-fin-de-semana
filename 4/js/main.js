'use strict';


//volver a pintar nuestras noticias, pero esta vez las recibidas tras hacer la petición a nuestra API de noticias de casa.

const ul = document.querySelector('.news');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  const news = data.news;

  //Pintamos las news-cards
  for (let i=0; i<news.length; i++){

    ul.innerHTML += `<li class="news__item news__item--no-image-visible"><h2 class="news__title">${news[i].title}</h2><img class="news__image" src="${news[i].image}" alt="${news[i].title}"></li>`;

  }

  //Hacemos la función que quita y pone la clase para mostrar la imagen cuando hagamos click en el li

  let li = document.querySelectorAll('.news__item');

  function showImage(e){
    const liClick = e.currentTarget;
    liClick.classList.toggle('news__item--no-image-visible');
  }

  for (let i=0; i<li.length; i++){

    li[i].addEventListener('click', showImage);

  }

  // Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
  const titles =[];
  for (let i=0; i<li.length; i++){
    console.log("Holiiii li = " + li)
    const title = li[i].firstChild.innerHTML;
    titles.push(title);

    // Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars
    if (title.includes('Mars') || title.includes('Martians')) {

      li[i].classList.add('.news__item--from-mars');

    }

  }
})








