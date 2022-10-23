"use strict";

import { apiDataMock } from "./sample";

let myData = null;

// TODO: not sure how this should be
// this gets called from a button click, synch code would call this then render,
// need rendering to wait for asynch response so passing it through
function loadCity(city, cb) {
    const key = "546c35a9a1c0387037c25c3d76b013fc";
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch(uri, { mode: "cors" })
        .then((response) => {
            if (response.status != 200) throw new Error(response.status);
            return response.json();
        })
        .then((data) => {
            parseWeatherJSON(data);
            if (cb) cb();
        })
        .catch(alert);
}

function loadMock() {
    parseWeatherJSON(apiDataMock);
}

function parseWeatherJSON(apiData) {
    const weather = new Array(apiData.weather.length);

    apiData.weather.forEach((element, index) => {
        weather[index] = {
            iconURI: `http://openweathermap.org/img/wn/${element.icon}.png`,
            description: `${element.main} - ${element.description}`,
        };
    });

    myData = {
        city: apiData.name,
        country: apiData.sys.country,
        temp: apiData.main.temp,
        feel: apiData.main.feels_like,
        pressure: apiData.main.pressure,
        humidity: apiData.main.humidity,
        weather: weather,
    };
}

export { myData, loadCity, loadMock };
