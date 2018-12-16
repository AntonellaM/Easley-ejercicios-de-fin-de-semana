'use strict';

const data = [{
    title: 'Asteroids 101',
    image: 'http://algarabianinos.com/chamaco/wp-content/uploads/2018/07/image2-e1531174594649.jpg'
  },
  {
    title: 'Life on Mars',
    image: 'https://st2.depositphotos.com/5792148/8453/v/950/depositphotos_84536144-stock-illustration-little-martians.jpg0'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://www.macocaya.es/9818-large_default/alien-globe.jpg'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://intrepidnow.com/wp-content/uploads/2015/08/CM8w2zQUkAAWmn4-300x234.jpg'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4kYW0w98JfN1zZ3PmBF08qbUKCAmjtgOU8lQ6___pPkLIAFt'
  }
];

// const listEl = document.querySelector('.news');
// // console.log (listEl);

// function createList() {
//   for (let i = 0; i < data.length; i++) {
//     const dataImages = data[i].image;
//     // console.log (dataImages);

//     const dataTitles = data[i].title;
//     // console.log (dataTitles);
//     listEl.innerHTML += `
//     <li class="news__item">
//     <h2 class="news__title">${dataTitles}</h2>
//     <img class="news__image" src=${dataImages} alt=${dataTitles}>
//     </li>`;
//   }
// }

// createList();

// const itemEl = document.querySelectorAll('.news__item');
// //  console.log (itemEl);

// function highlightList() {
//   for (let i = 0; i < itemEl.length; i++) {
//     const itemName = itemEl[i].outerText;
//     // console.log(itemName);

//     if (itemName.includes('Martians')||itemName.includes('Mars')){
//       itemEl[i].classList.add('news__item--from-mars');
//     } else {
//       console.log(`${itemName} doesnt include "Mars" nor "Martians"`);

//     }
//   }
// }

// highlightList();

const listEl = document.querySelector('.news');
// console.log (listEl);

function apiNews () {
  fetch ('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
    .then (response => response.json ())
    .then (data => {
      // console.log (data);
      
      const newsArr = data.news;
      // console.log(newsArr);

      for (let i=0; i<newsArr.length; i++){
        let newTitle =newsArr[i].title;
        // console.log (newTitle)

        let newImg =newsArr[i].image;
        // console.log (newImg)

        listEl.innerHTML+=`
        <li class="news__item news__item--no-image-visible">
        <h2 class ="news__title">${newTitle}</h2>
        <img class="news__image" src=${newImg}>
        </li>`;
      }

      const allListItemsEl = document.querySelectorAll('.news__item'); 
      // console.log (allListItemsEl);
      const childNodes=allListItemsEl[0].childNodes;
      // console.log (childNodes);
      for (let i=0; i<childNodes.length;i++){
        const imagenesNews = childNodes[3];
        console.log(imagenesNews);
      
      }
    })

}
apiNews();

// newSelected.classList.toggle('news__item--no-image-visible');

        // function appearOrDissapearImage (event){
        // const itemSelected = event.currentTarget;
        // console.log (itemSelected);
        // }

        // appearOrDissapearImage ();

        // function handlerToggle (event){

        //   console.log (event);

        //   const newSelected = event.currentTarget;
          

        //   console.log (newSelected);

        // }

        // imagenesNews.addEventListener('click', handlerToggle);

