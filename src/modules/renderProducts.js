// Переменные 
const mainProductBox = document.querySelectorAll('.product');
const mainGoodsBox = document.querySelectorAll('.goods__content');
const GOODS_LIST = 'http://localhost:3000/data';

const formCarrancy = document.forms['form-currency'];
const select = formCarrancy.querySelector('select');
const optionAll = formCarrancy.querySelectorAll('option');

// Получение данных о товарах
async function getGoods() {
    const res = await fetch(GOODS_LIST);
    const mainProductArr = await res.json();
    renderGoods(mainProductArr);
    //renderGoods1(mainProductArr);
    renderFirstGoods(mainProductArr);
    changeCarrancy(mainProductArr);
}

getGoods();

function changeCarrancy(mainProductArr) {
    setTimeout(function () {
        const productItemPrice = document.querySelectorAll('.product-item__price');
        const productItemPriceCar = document.querySelectorAll('.product-item__price-carrancy');

        //Делаем массив
        const arrProductItemPrice = [...productItemPrice];
        const arrProductItemPriceCar = [...productItemPriceCar];

        // Получаем значение селекта

        // Перебор товаров 
        /* function foo() {
            const arrProduct = mainProductArr;
            arrProduct.forEach((item) => {
                const newArrProduct = item.product;
                newArrProduct.forEach((item) => {
                    select.addEventListener('click', function () {
                        if (select.value === 'RUB') {
                            setRub();
                        } else if (select.value === 'USD') {
                            setUsd();
                        }
                    });

                    function setUsd() {
                        arrProductItemPrice.forEach((element) => {
                            element.textContent = item.salepriceUSD;

                        });
                        productItemPriceCar.forEach((element) => {
                            element.textContent = '$';
                        });
                    }

                    function setRub() {
                        arrProductItemPrice.forEach((element) => {
                            element.textContent = item.salePriceRUB;
                        });
                        productItemPriceCar.forEach((element) => {
                            element.textContent = '₽';
                        });
                    }
                });
            });
        }
        foo(); */
    }, 1000);
}

changeCarrancy();

//Отрисовка товаров на странице
function renderGoods(mainProductArr) {
    mainProductArr.forEach(item => {
        const newArr = item.product;
        newArr.forEach(elem => {
            const productHtml = `
        <div class="product-item">
                        <div class="product-item-box" data-id="${elem.id}">
                            <div class="product__new">${elem.new === true ? "NEW" : "old"}</div>
                            <div class="product__sale">${elem.discount === true ? "SALE" : "nosale"}</div>
                            <div class="product-item__title">${elem.title}</div>
                            <img class="product-item__img" src="${elem.img}" alt="Товар">
                            <div class="product-item__price">${elem.salePriceRUB}<span class="product-item__price-carrancy">₽</span></div>
                            
                            <ul class="product-item__link-menu">
                                <li class="product-item__items product-item__items--cart">
                                    <button class="product-item__link product-item__btn-cart" data-cart>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" style="fill:#292728" width="15px"
                                            height="15px" viewBox="0 0 15 15" version="1.1" data-cart="cart">
                                            <g id="surface1">
                                                <path
                                                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
                                                    d="M 2.652344 1.40625 L 0 1.40625 L 0 2.34375 L 2.039062 2.34375 L 5.320312 9.847656 L 13.128906 9.847656 L 13.128906 8.910156 L 5.933594 8.910156 Z M 2.652344 1.40625 " />
                                                <path
                                                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
                                                    d="M 4.691406 3.28125 L 6.566406 7.972656 L 13.128906 7.972656 L 15.007812 3.28125 Z M 12.496094 7.035156 L 7.199219 7.035156 L 6.074219 4.21875 L 13.621094 4.21875 Z M 12.496094 7.035156 " />
                                                <path
                                                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
                                                    d="M 7.035156 10.785156 C 6.257812 10.785156 5.628906 11.414062 5.628906 12.191406 C 5.628906 12.96875 6.257812 13.597656 7.035156 13.597656 C 7.8125 13.597656 8.441406 12.96875 8.441406 12.191406 C 8.441406 11.414062 7.8125 10.785156 7.035156 10.785156 Z M 7.035156 12.660156 C 6.777344 12.660156 6.566406 12.449219 6.566406 12.191406 C 6.566406 11.933594 6.777344 11.722656 7.035156 11.722656 C 7.292969 11.722656 7.503906 11.933594 7.503906 12.191406 C 7.503906 12.449219 7.292969 12.660156 7.035156 12.660156 Z M 7.035156 12.660156 " />
                                                <path
                                                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
                                                    d="M 11.722656 10.785156 C 10.945312 10.785156 10.316406 11.414062 10.316406 12.191406 C 10.316406 12.96875 10.945312 13.597656 11.722656 13.597656 C 12.5 13.597656 13.128906 12.96875 13.128906 12.191406 C 13.128906 11.414062 12.5 10.785156 11.722656 10.785156 Z M 11.722656 12.660156 C 11.464844 12.660156 11.253906 12.449219 11.253906 12.191406 C 11.253906 11.933594 11.464844 11.722656 11.722656 11.722656 C 11.980469 11.722656 12.191406 11.933594 12.191406 12.191406 C 12.191406 12.449219 11.980469 12.660156 11.722656 12.660156 Z M 11.722656 12.660156 " />
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                                <li class="product-item__items">
                                    <button class="product-item__link product-item__btn-cart">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" style="fill:#292728" width="15px"
                                            height="15px" viewBox="0 0 15 15" version="1.1" id="heart">
                                            <g id="surface1">
                                                <path
                                                    style=" stroke:none;fill-rule:nonzero;fill:rgb(6.27451%,9.411765%,12.54902%);fill-opacity:1;"
                                                    d="M 7.5 13.460938 C 7.125 13.464844 6.765625 13.316406 6.5 13.050781 L 1.671875 8.222656 C 0.902344 7.441406 0.476562 6.386719 0.492188 5.292969 C 0.5 4.289062 0.90625 3.328125 1.621094 2.625 C 2.335938 1.921875 3.304688 1.53125 4.308594 1.542969 C 5.328125 1.53125 6.3125 1.9375 7.03125 2.664062 L 7.5 3.132812 L 7.882812 2.746094 C 9.257812 1.339844 11.460938 1.160156 13.039062 2.328125 C 13.921875 3.007812 14.46875 4.03125 14.539062 5.140625 C 14.613281 6.25 14.203125 7.335938 13.421875 8.125 L 8.5 13.050781 C 8.234375 13.316406 7.875 13.464844 7.5 13.460938 Z M 4.289062 2.476562 C 3.542969 2.472656 2.828125 2.761719 2.292969 3.28125 C 1.742188 3.8125 1.429688 4.546875 1.429688 5.3125 C 1.421875 6.152344 1.75 6.964844 2.34375 7.5625 L 7.171875 12.390625 C 7.261719 12.476562 7.378906 12.527344 7.503906 12.527344 C 7.628906 12.527344 7.75 12.476562 7.835938 12.390625 L 12.765625 7.457031 C 13.347656 6.859375 13.652344 6.042969 13.59375 5.207031 C 13.542969 4.363281 13.128906 3.585938 12.453125 3.074219 C 11.25 2.1875 9.570312 2.328125 8.53125 3.40625 L 7.832031 4.125 C 7.746094 4.214844 7.625 4.261719 7.5 4.261719 C 7.375 4.261719 7.253906 4.214844 7.167969 4.125 L 6.371094 3.328125 C 5.820312 2.785156 5.082031 2.476562 4.308594 2.476562 Z M 4.289062 2.476562 " />
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                                <li class="product-item__items">
                                    <button class="product-item__link product-item__btn-cart">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" style="fill:#292728" width="15px"
                                            height="15px" viewBox="0 0 15 15" version="1.1" id="plus">
                                            <g id="surface1">
                                                <path
                                                    style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;"
                                                    d="M 23 14 C 23 18.966667 18.966667 23 14 23 C 9.033333 23 5 18.966667 5 14 C 5 9.033333 9.033333 5 14 5 C 18.966667 5 23 9.033333 23 14 Z M 23 14 "
                                                    transform="matrix(0.46875,0,0,0.46875,0,0)" />
                                                <path
                                                    style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;"
                                                    d="M 27 27 L 20.366667 20.366667 "
                                                    transform="matrix(0.46875,0,0,0.46875,0,0)" />
                                                <path
                                                    style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;"
                                                    d="M 14 10 L 14 18 " transform="matrix(0.46875,0,0,0.46875,0,0)" />
                                                <path
                                                    style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;"
                                                    d="M 10 14 L 18 14 " transform="matrix(0.46875,0,0,0.46875,0,0)" />
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                                <li class="product-item__items">
                                    <button class="product-item__link product-item__btn-cart">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" style="fill:#292728" width="15px"
                                            height="15px" viewBox="0 0 15 15" version="1.1" id="change">
                                            <g id="surface1">
                                                <path
                                                    style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;"
                                                    d="M 9.484375 6.878906 L 7.457031 4.847656 C 7.210938 4.605469 7.210938 4.210938 7.457031 3.964844 C 7.699219 3.722656 8.09375 3.722656 8.339844 3.964844 L 11.875 7.5 L 8.339844 11.035156 C 8.09375 11.28125 7.699219 11.28125 7.457031 11.035156 C 7.210938 10.792969 7.210938 10.398438 7.457031 10.152344 L 9.480469 8.128906 L 3.75 8.128906 C 3.40625 8.128906 3.125 7.847656 3.125 7.503906 C 3.125 7.15625 3.40625 6.878906 3.75 6.878906 Z M 9.484375 6.878906 " />
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
        `;
            mainProductBox.forEach(item => {
                item.insertAdjacentHTML('beforeend', productHtml);
            });
        });
    });
}

//Отрисовка одного товара на странице
function renderFirstGoods(mainProductArr) {
    const firstProductHtml = `
        <div class="goods__top">
        <div class="goods__top-slide">
            <div class="goods__top-big">
                <div class="product__new goods__top-new">${mainProductArr[1].product[0].new}</div>
                <div class="product__sale goods__top-sale">${mainProductArr[1].product[0].discount}</div>
                <img class="goods__top-big-img img__scale" src="${mainProductArr[1].product[0].img}" alt="Товар">
            </div>
            <div class="goods__top-thumb">
                <div class="goods__top-thumb-item">
                    <img class="goods__top-thumb-img img__scale"
                        src="${mainProductArr[1].product[0].imgMin1}" alt="Товар">
                </div>
                <div class="goods__top-thumb-item">
                    <img class="goods__top-thumb-img img__scale"
                        src="${mainProductArr[1].product[0].imgMin2}" alt="Товар">
                </div>
                <div class="goods__top-thumb-item">
                    <img class="goods__top-thumb-img img__scale"
                        src="${mainProductArr[1].product[0].imgMin3}" alt="Товар">
                </div>
            </div>
        </div>
        <div class="goods__top-content">
            <h1 class="goods__top-title">${mainProductArr[1].product[0].title}</h1>
            <div class="goods__top-presence">
                <p class="goods__top-presence-name">Наличие:</p>
                <div class="goods__top-line">
                    <span class="goods__top-line--orange">|</span>
                    <span class="goods__top-line--orange">|</span>
                    <span class="goods__top-line--orange">|</span>
                    <span class="goods__top-line--orange">|</span>
                    <span class="goods__top-line--grey">|</span>
                    <span class="goods__top-line--grey">|</span>
                </div>
            </div>
            <p class="goods__top-text">${mainProductArr[1].product[0].text}</p>
            <div class="goods__item-price">
                <div class="goods__item-price-old">${mainProductArr[1].product[0].priceUSD}<span
                        class="goods__item-sale-carrancy">₽</span>
                </div>
                <div class="goods__item-price-new">${mainProductArr[1].product[0].priceUSD}<span
                        class="goods__item-price-carrancy">₽</span>
                </div>
            </div>
            <form class="goods__form" action="#" method="post" name="product-form">
                <label class="goods__form-color">
                    Цвет:
                    <select class="goods__form-select" name="color">
                        <option value="select" selected>Выбрать</option>
                        <option value="red">Красный</option>
                        <option value="blue">Синий</option>
                        <option value="white">Белый</option>
                        <option value="green">Зеленый</option>
                    </select>
                </label>
                <label class="goods__form-size">
                    Размер:
                    <select class="goods__form-select" name="size">
                        <option value="select" selected>Выбрать</option>
                        <option value="small">Маленький</option>
                        <option value="medium">Средний</option>
                        <option value="big">Большой</option>
                    </select>
                </label>
                <div class="goods__form-box">
                    <button class="goods__form-btn goods__form-btn-bye" type="submit">
                        Купить
                    </button>
                    <button class="goods__form-btn goods__form-btn-one" type="submit">
                        Купить в 1 клик</button>
                    <button class="goods__form-btn goods__form-btn-like" href="#"></button>
                </div>
            </form>
            <div class="goods__top-characteristic">
                <ul class="goods__top-list">
                    <li class="goods__top-item">
                        <span>Производитель:</span>
                        <span>${mainProductArr[1].product[0].manufacturer}</span>
                    </li>
                    <li class="goods__top-item">
                        <span>Артикул:</span>
                        <span>${mainProductArr[1].product[0].id}</span>
                    </li>
                    <li class="goods__top-item">
                        <span>Гарантия:</span>
                        <span>${mainProductArr[1].product[0].guarantee}</span>
                    </li>
                    <li class="goods__top-item">
                        <span>Вес:</span>
                        <span>${mainProductArr[1].product[0].weight}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        `;
    mainGoodsBox.forEach(item => {
        item.insertAdjacentHTML('afterbegin', firstProductHtml);
    });
}






