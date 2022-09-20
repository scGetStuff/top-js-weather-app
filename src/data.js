"use strict";

import { apiJSON as testJSON } from "./sample";

let myData = null;

function loadCity(city) {
    myData = parseWeatherJSON(testJSON);
}

function loadTest(){
    myData = parseWeatherJSON(testJSON);
}

function parseWeatherJSON(apiJSON) {
    const weather = new Array(apiJSON.weather.length);

    apiJSON.weather.forEach((element, index) => {
        weather[index] = {
            iconURI: `http://openweathermap.org/img/wn/${element.icon}.png`,
            description: `${element.main} - ${element.description}`,
        };
    });

    return {
        city: apiJSON.name,
        country: apiJSON.sys.country,
        temp: apiJSON.main.temp,
        feel: apiJSON.main.feels_like,
        pressure: apiJSON.main.pressure,
        humidity: apiJSON.main.humidity,
        weather: weather,
    };
}

export { myData, loadCity, loadTest };
