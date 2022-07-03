const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');
const modalCloseBtn = document.querySelector('.modal__close');
const asideBannerLink = document.querySelector('.shop__aside-banner-link');

// Модальное окно когда опускается на 800px
function modalScroll() {
    if (window.scrollY > 800) {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
        window.removeEventListener('scroll', modalScroll);
    }
}

window.addEventListener('scroll', modalScroll);

//Модальное окно при нажатии на баннер
asideBannerLink.addEventListener('click', function (e) {
    if (e.target) {
        e.preventDefault();
    }
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
});

// Модальное окно через пройденное время
function showModalTime(time) {
    setTimeout(function () {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    }, time);
}

showModalTime(1000000);

// Кнопка закрытия окна
modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
});

// Закрытие при нажатии на серую область
modalInner.addEventListener('click', function (e) {
    if (e.target === modalInner) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
});

// Закрытие при нажатии на Escape
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
});
