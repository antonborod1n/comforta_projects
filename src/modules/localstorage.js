'use strict'; /*- объявляем что будем работать в новом режиме */

//Переменные
const cartNumbs = document.querySelector('.cart__number'),
      cartSums = document.querySelector('.cart__sum'),
      cartMainContents = document.querySelector('.cart-main__box'),
      cartLogoProduct = document.querySelector('.cart__product');

//Добавляем в localStorage
function showModalTime(time) {
    setInterval(function () {
        function setContent() {
            localStorage.setItem('num', cartNumbs.innerHTML);
            localStorage.setItem('sum', cartSums.innerHTML);
            localStorage.setItem('cart-content', cartMainContents.innerHTML);
        }
        setContent();

    }, time);
}

showModalTime(1000);

//Получаем с localStorage
function getContent() {
    cartLogoProduct.textContent = localStorage.getItem('num') || 0;
    cartNumbs.textContent = localStorage.getItem('num') || 0;
    cartSums.textContent = localStorage.getItem('sum') || 0;
    cartMainContents.innerHTML = localStorage.getItem('cart-content');
}

getContent();

