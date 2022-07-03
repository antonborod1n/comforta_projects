
//Получение данных о валютах
const CARRANCY_URL = 'https://cdn.cur.su/api/latest.json',
    // Объект 4-х валют
    carrancyObj = {};

fetch(CARRANCY_URL)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        for (let key in data) {
            carrancyObj.USD = data.rates.USD;
            carrancyObj.EUR = data.rates.EUR;
            carrancyObj.BYN = data.rates.BYN;
            carrancyObj.RUB = data.rates.RUB;
        }
    });
