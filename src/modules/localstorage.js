//localStorage
const cartNumbs = document.querySelector('.cart__number');
const cartSums = document.querySelector('.cart__sum');
const cartMainContents = document.querySelector('.cart-main__box');
const cartLogoProduct = document.querySelector('.cart__product');

function showModalTime(time) {
    setInterval(function () {
        function setContent() {
            localStorage.setItem('num', cartNumbs.innerHTML);
            localStorage.setItem('sum', cartSums.innerHTML);
            localStorage.setItem('cart-content', cartMainContents.innerHTML);
        };
        setContent();

    }, time);
}

showModalTime(3000);

function getContent() {
    cartLogoProduct.textContent = 0 || localStorage.getItem('num');
    cartNumbs.textContent = 0 || localStorage.getItem('num');
    cartSums.textContent = 0 || localStorage.getItem('sum');
    cartMainContents.innerHTML = localStorage.getItem('cart-content');
}

getContent();

