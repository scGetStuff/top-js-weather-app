// TODO: i hate javascript, should define a class

function parseWeatherJSON(data) {
    const weather = new Array(data.weather.length);

    data.weather.forEach((element, index) => {
        weather[index] = {
            iconURI: `http://openweathermap.org/img/wn/${element.icon}.png`,
            description: `${element.main} - ${element.description}`,
        };
    });

    return {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feel: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        weather: weather,
    };
}

export { parseWeatherJSON };
