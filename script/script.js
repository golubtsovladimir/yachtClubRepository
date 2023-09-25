/* Тема */
let darkTheme = document.querySelector('.theme-button-dark');
let lightTheme = document.querySelector('.theme-button-light');

darkTheme.onclick = function(){
  document.body.classList.add('dark');
  darkTheme.classList.add('active');
  lightTheme.classList.remove('active');
}

lightTheme.onclick = function(){
  document.body.classList.remove('dark');
  darkTheme.classList.remove('active');
  lightTheme.classList.add('active');
}

/* Шрифт */
let sansSerif = document.querySelector('.font-button-sans-serif');
let serif = document.querySelector('.font-button-serif');
serif.onclick = function(){
  sansSerif.classList.remove('active');
  serif.classList.add('active');
  document.body.classList.add('serif');
}
sansSerif.onclick = function(){
  sansSerif.classList.add('active');
  serif.classList.remove('active');
  document.body.classList.remove('serif');
}

/* Скрытый текст */
let articles = document.querySelectorAll('.blog-article');
for (let article of articles) {
  let moreButton = article.querySelector('.more');
  moreButton.onclick = function(){
    article.classList.remove('short');
  };
};

/* Иконки */
let grid = document.querySelector('.card-view-button-grid');
let list = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');
grid.onclick = function(){
  cardsList.classList.remove('list');
  grid.classList.add('active');
  list.classList.remove('active');
}
list.onclick = function(){
  cardsList.classList.add('list');
  list.classList.add('active');
  grid.classList.remove('active');
}

/* Галерея */
let mainPhoto = document.querySelector('.active-photo');
let slider = document.querySelectorAll('.preview-list li a')
for (let photo  of slider) {
  photo.onclick  = function (evt){
    evt.preventDefault();
    mainPhoto.src = photo.href;
    let currentActive = document.querySelector('.active-item');
    currentActive.classList.remove('active-item');
    photo.classList.add('active-item');
  }
}