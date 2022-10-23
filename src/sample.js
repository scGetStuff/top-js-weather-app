"use strict";

const apiDataMock = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
        },
    ],
    base: "stations",
    main: {
        temp: 286.53,
        feels_like: 285.88,
        temp_min: 284.64,
        temp_max: 288.53,
        pressure: 1022,
        humidity: 75,
    },
    visibility: 10000,
    wind: { speed: 1.03, deg: 0 },
    clouds: { all: 99 },
    dt: 1663535103,
    sys: {
        type: 2,
        id: 2075535,
        country: "GB",
        sunrise: 1663479596,
        sunset: 1663524580,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
};

export { apiDataMock };
