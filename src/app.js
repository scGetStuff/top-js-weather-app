"use strict";

import styles from "./styles.css";

const cl = console.log;

async function doStuffAwait(city) {
    console.clear();

    const key = "546c35a9a1c0387037c25c3d76b013fc";
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const searchResults = document.createElement("div");
    const main = document.querySelector("main");

    while (main.firstChild) main.removeChild(main.firstChild);
    
    const response = await fetch(uri, { mode: "cors" });
    if (response.status != 200) {
        searchResults.innerText = response.status;
        return;
    }
    const data = await response.json();
    searchResults.innerText = JSON.stringify(data);
    main.appendChild(searchResults);
}

function doStuff(city) {
    console.clear();

    const key = "546c35a9a1c0387037c25c3d76b013fc";
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const searchResults = document.createElement("div");
    const main = document.querySelector("main");

    while (main.firstChild) main.removeChild(main.firstChild);

    fetch(uri, { mode: "cors" })
        .then((response) => {
            if (response.status != 200) throw new Error(response.status);
            return response.json();
        })
        .then((data) => {
            cl(data);
            searchResults.innerText = JSON.stringify(data.main);
        })
        .catch(alert);
    main.appendChild(searchResults);
}

doStuffAwait("London");
//doStuff("London");
