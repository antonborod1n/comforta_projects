'use strict'; /*- объявляем что будем работать в новом режиме */

 //Переменные
const asideCategoryBtn = document.querySelector('.shop__aside-category-btn'),
      asideCategoryList = document.querySelector('.shop__aside-list');

//Подключение категорий меню
asideCategoryBtn.addEventListener('click', function () {
    asideCategoryList.classList.toggle('shop__aside-list--active');
});