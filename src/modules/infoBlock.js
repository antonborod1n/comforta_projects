'use strict'; /*- объявляем что будем работать в новом режиме */

//Добавляем классы
class BlogItem {
    constructor(src, alt, date, userName, section, title, text) {
        this.src = src;
        this.alt = alt;
        this.date = date;
        this.userName = userName;
        this.section = section;
        this.title = title;
        this.text = text;
    }
//Метод отрисовки 
    render() {
        const infoInner = document.querySelector('.info__inner');
        const infoBlockHtml = `
                <div class="info__item">
                    <img class="info__item__img" src=${this.src} alt=${this.alt}>
                        <div class="info__item-box">
                            <div class="info__item__meta">
                                    <span class="info__item__meta-data">${this.date}</span>
                                    <span class="info__item__meta-name">${this.userName}</span>
                                    <span class="info__item__meta-tag">${this.section}</span>
                            </div>
                            <p class="info__item-title">${this.title}</p>
                            <p class="info__item-text">${this.text}</p>
                            <a class="btn">Узнать больше</a>
                         </div>
                 </div>
        `;
        infoInner.insertAdjacentHTML('beforeend', infoBlockHtml);
    }
}

new BlogItem(
    "./images/blog-1.jpg",
    "Блог картинка",
    "15.10.2017 в 12:04",
    "Владимир",
    "Бизнес",
    "Богатый опыт укрепление и развитие структуры позволяет",
    "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций."
).render();

new BlogItem(
    "./images/blog-2.jpg",
    "Блог картинка",
    "05.10.2018 в 13:14",
    "Николай",
    "Бизнес-аналитика",
    "Укрепление и развитие структуры позволяет",
    "Проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций."
).render();

new BlogItem(
    "./images/blog-1.jpg",
    "Блог картинка",
    "25.10.2019 в 14:20",
    "Александр",
    "Аналитика",
    "Опыт укрепление и развитие структуры позволяет",
    "Этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций."
).render();

