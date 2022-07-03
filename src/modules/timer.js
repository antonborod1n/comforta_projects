'use strict'; /*- объявляем что будем работать в новом режиме */

const deadLine = '2022-07-20'; // Дата окончания акции

//Функция расчета времени 
function getTimeRemaining(endTime) {
    const t = new Date(endTime) - Date.parse(new Date()), // Получить разницу в миллисекундах
        days = Math.floor((t / (1000 * 60 * 60 * 24))), // Расчет дней
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),// Расчет часов
        minutes = Math.floor((t / 1000 / 60) % 60),// Расчет дминут
        seconds = Math.floor((t / 1000) % 60);// Расчет секунд 

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }; // возвращаем переменные из функции в объекте 
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

// Ф-ция установки времени на страницу
function setClock(endTime) {
    const timer = document.querySelector('.counter'),
        daysSpan = timer.querySelector('#days'),
        hoursSpan = timer.querySelector('#hours'),
        minutesSpan = timer.querySelector('#minutes'),
        secondsSpan = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);// Запускаем функцию каждую секунду

    updateClock();
    //Ф-ция обновление таймера 
    function updateClock() {
        const t = getTimeRemaining(endTime);
        daysSpan.innerHTML = getZero(t.days);
        hoursSpan.innerHTML = getZero(t.hours);
        minutesSpan.innerHTML = getZero(t.minutes);
        secondsSpan.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            //Остановка таймера
            clearInterval(timeInterval);
        }
    }
}

setClock(deadLine);

