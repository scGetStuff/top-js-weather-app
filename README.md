# top-js-weather-app
The Odin Project, Full Stack JavaScript Path, JavaScript, JavaScript in the Real World, Project: Weather App

From spec
- search for a specific location
- parse useful info out of API result
- toggle displaying the data in Fahrenheit or Celsius
- change the look of the page based on the data
- Optional: add a ‘loading’ component that displays while asynch code runs

As far as changing the look, I'm just doing the weather icon.
Not doing the loading thing, it is pointless, the API comes back too fast.

API docs
https://openweathermap.org/current#name
`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
`https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`
`https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}`
`https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}`
