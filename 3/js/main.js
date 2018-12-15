'use strict';


//volver a pintar nuestras noticias, pero esta vez las recibidas tras hacer la petición a nuestra API de noticias de casa. https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json

const ul = document.querySelector('.news');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  const news = data.news;

  for (let i=0; i<news.length; i++){

    ul.innerHTML += `<li class="news__item"><h2 class="news__title">${news[i].title}</h2><img class="news__image" src="${news[i].image}" alt="${news[i].title}"></li>`;

  }
})

//Buscaremos todos los elementos con clase .news__item.
const li = document.querySelectorAll('.news__item');

// Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
const titles =[];
for (let i=0; i<li.length; i++){

  const title = li[i].firstChild.innerHTML;
  titles.push(title);

  // Usando el método includes() comprobaremos si contienen “Mars” o “Martian” y aplicaremos al li correspondiente la clase .news__item--from-mars
  if (title.includes('Mars') || title.includes('Martians')) {

    li[i].classList.add('.news__item--from-mars');

  }

}





