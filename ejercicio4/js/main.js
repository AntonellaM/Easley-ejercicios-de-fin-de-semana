'use strict';

const newsList = document.querySelector('.news');

//Guardamos la api en una constante
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';


//Hacemos la petición
fetch(api)
  .then(response => response.json())
  .then(data => {
    //Una vez recibido los datos decimos que los guarde en una constante
    const results = data.news;

    //Recorremos los resultados
    for (const cosis of results) {

      //Guardamos los títulos y las imagenes del array en constantes
      const addTitle = cosis.title;
      const addImage = cosis.image;

      //Creamos una lista
      cosis[results] = `<li class="news__item"> <h2 class="news__title">${addTitle}</h2> <img class="news__image" src="${addImage}" alt="${addTitle}"> </li>`;

      //La pintamos en el html
      newsList.innerHTML += cosis[results];
    }

    //Llamamos a la función que hace que se muestre o quite la imagen
    showImage();
  });


//Función encargada de asignar el culpable y le añada o quite la clase
function handleClick (e) {
  const culpable = e.currentTarget;
  culpable.classList.toggle('news__item--no-image-visible');
}

//
function showImage() {
  //Recogemos los li donde queremos que se dispare el evento
  const elements = document.querySelectorAll('.news__item');
  for (const element of elements) {
    //A cada elemento le ponemos el evento para que al hacer click ejecute la función handleClick
    element.addEventListener('click', handleClick);
  }
}


