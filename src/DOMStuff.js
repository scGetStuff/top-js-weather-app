"use strict";

import * as Data from "./data";

const cl = console.log;
const search = document.getElementById("search");
const dynamic = document.getElementById("dynamic");
const location = document.getElementById("location");
const temp = document.getElementById("temp");
const feel = document.getElementById("feel");
const pressure = document.getElementById("pressure");
const humid = document.getElementById("humid");
const fahrenheit = document.getElementById("fahrenheit");

function bind() {
    click("searchButton", searchEvent);
    click("fahrenheit", setTemp);
    click("celsius", setTemp);

    function click(id, handler) {
        document.getElementById(id).addEventListener("click", handler);
    }
}

function searchEvent(event) {
    const city = search.value;
    Data.loadCity(city, renderData);
}

function renderData() {
    location.innerText = `${Data.myData.city}, ${Data.myData.country}`;
    setTemp();
    pressure.innerText = `${Data.myData.pressure}`;
    humid.innerText = `${Data.myData.humidity}`;

    dynamic.innerHTML = "";
    Data.myData.weather.forEach((element) => {
        createIMG(element.iconURI, element.description);
    });
}

function setTemp() {
    temp.innerText = `${convertTemp(Data.myData.temp)}`;
    feel.innerText = `${convertTemp(Data.myData.feel)}`;
}

function convertTemp(kelvin) {
    const isFahrenheit = fahrenheit.checked;
    const unit = isFahrenheit ? "F" : "C";
    let temp = Number.parseFloat(kelvin);

    // C = K - 273.15
    // F = (K − 273.15) × 1.8 + 32
    temp = temp - 273.15;
    if (isFahrenheit) temp = temp * 1.8 + 32;

    return temp.toFixed(2) + unit;
}

function createIMG(src, alt) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    div.classList.add("weather-icon");
    span.innerText = alt;
    img.src = src;
    img.alt = alt;
    div.appendChild(span);
    div.appendChild(img);
    dynamic.appendChild(div);
}

export { bind, renderData };
