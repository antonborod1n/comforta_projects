import $ from "jquery";
import "slick-carousel";

//Слик-слайдер
setTimeout(() => {
    $(function () {
        $('.new-product__box').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images//icons/slider-arrow-left.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images//icons/slider-arrow-right.svg" alt="arrow"></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed: 500
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        speed: 500
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500
                    }
                }
            ],
        });
    });
}, 1000);

setTimeout(() => {
    $(function () {
        $('.goods__box').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images//icons/slider-arrow-left.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images//icons/slider-arrow-right.svg" alt="arrow"></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed: 500
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        speed: 500
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500
                    }
                }
            ],
        });
    });
}, 1000);

//Подключение мобильного меню
const menuBtn = document.querySelector('.menu__btn'),
      menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu__list--active');
});

//Кнопка наверх страницы
const upBtn = document.querySelector('.arrow-up');

window.onscroll = () => {
    if (window.scrollY > 350) { // когда опускается на 350px появляется кнопка НАВЕРХ
        upBtn.classList.add('arrow-up--active'); // Добавляем класс
    } else {
        upBtn.classList.remove('arrow-up--active'); // Удаляем класс
    }
};
