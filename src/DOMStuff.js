"use strict";

import * as Data from "./data";

const cl = console.log;
const search = document.getElementById("search");
const searchResults = document.querySelector(".weather");

function bind() {
    click("searchButton", searchEvent);

    function click(id, handler) {
        document.getElementById(id).addEventListener("click", handler);
    }
}

function searchEvent(event) {
    const city = search.value;
    alert(city);
}

function renderData() {
    searchResults.innerHTML = "";

    createP(`${Data.myData.city}, ${Data.myData.country}`);

    Data.myData.weather.forEach(element => {
        createIMG(element.iconURI, element.description);
    });

    createP(`Temperature ${Data.myData.temp} feels like ${Data.myData.feel}`);
    createP(`Pressure ${Data.myData.pressure}`);
    createP(`Humidity ${Data.myData.humidity}`);

    // createP(JSON.stringify(Data.myData));

    function createP(value) {
        const p = document.createElement("p");
        p.innerText = value;
        searchResults.appendChild(p);
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
        searchResults.appendChild(div);
    }

}



export { bind, renderData };
