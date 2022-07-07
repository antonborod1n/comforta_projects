'use strict'; /*- объявляем что будем работать в новом режиме */

window.addEventListener('DOMContentLoaded', () => {

    //Переменные
    const cartBlock = document.querySelector('.cart'),
          cartMain = document.querySelector('.cart-main--none'),
          cartBox = document.querySelector('.cart-main__box'),
          cartCloseBtn = document.querySelector('.cart__close');

    // Обработчик события при клике на корзину в head
    cartBlock.addEventListener('click', function () {
        cartMain.classList.add('cart-main--block');
    });

    // Кнопка закрытия корзины
    cartCloseBtn.addEventListener('click', function () {
        cartMain.classList.remove('cart-main--block');
        document.body.style.overflow = '';
    });

    // Обработчик события по кнопке добавить в корзину 
    window.addEventListener('click', function (e) {
        if (e.target.hasAttribute('data-cart')) {

            // находим карточку по которой был клик
            const productItem = e.target.closest('.product-item');

            //Создаем шабон объекта для заполнения
            const productInfo = {
                id: productItem.dataset.id,
                imgSrc: productItem.querySelector('.product-item__img').getAttribute('src'),
                title: productItem.querySelector('.product-item__title').innerText,
                price: productItem.querySelector('.product-item__price').innerText,
                carrancy: productItem.querySelector('.product-item__price-carrancy').innerText
            };

            // Шаблон товаров в корзине
            const cartItemHtml = `<div class="cart-product__box">
            <div>
                <img class="product-item__img cart-product__img" src="${productInfo.imgSrc}" alt="Товар">
            </div>
            <div class="cart-product__items-box">
                <div class="cart-product__title">${productInfo.title}</div>
                <div class="cart-product__price">${productInfo.price}</div>
                <span class="product-item__price-carrancy cart-product__price-carrancy">${productInfo.carrancy}</span>
                </div>
            </div>`;

            cartBox.insertAdjacentHTML('beforeend', cartItemHtml);

            // Вызываем ф-цию добавления для иконки 
            addCartIcon();
            calcCartPrice();
        }
    });

    // Добавляем в иконку колл товаров в корзине 
    function addCartIcon() {
        const cartProductBox = document.querySelectorAll('.cart-product__box').length;
        const cartNumber = document.querySelector('.cart__number');
        const cartLogopProduct = document.querySelector('.cart__product');
        cartNumber.textContent = cartProductBox;
        cartLogopProduct.textContent = cartProductBox;
    }

    //Ф-ция подсчета итого
    function calcCartPrice() {
        let totalPrice = 0;
        const cartProductBox = document.querySelectorAll('.cart-product__box');
        const cartMainSum = document.querySelector('.cart-main__sum');
        const cartLogoSum = document.querySelector('.cart__sum');

        cartProductBox.forEach(function (item) {
            const price = item.querySelector('.cart-product__price').textContent;
            const priceSum = parseInt(price);
            totalPrice += priceSum;
        });

        cartMainSum.textContent = totalPrice;
        cartLogoSum.textContent = totalPrice;
    }
});