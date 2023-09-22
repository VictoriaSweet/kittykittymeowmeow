function getWeatherData (x, y) {

const city = "Austin";
const latitude = x;
const longitude = y;
const url = `https://api.weather.gov/points/${latitude},${longitude}`;

let forecast;
fetch(url).then(function (response) {
    //going to be a json string 
    //parse the json

    response.json().then(function (weatherData) {
        console.log(weatherData.properties.forecast);
        forecast = weatherData.properties.forecast;

        fetch(forecast).then(function (response) {

            response.json().then(function (newData) {

                console.log(newData)
console.log( newData.properties.periods[0].name)
// properties.periods[0].name;
// properties.periods[0].temperature;
// properties.periods[0].shortForecast;
console.log(newData.properties.periods[0].name)
console.log(newData.properties.periods[0].temperature)
console.log(newData.properties.periods[0].shortForecast)
for (let index = 0; index < 5; index++) {
// // console.log(newData.properties.periods[index].name)
// // console.log(newData.properties.periods[index].temperature)
 console.log(newData.properties.periods[index].shortForecast) 
let weatherName = newData.properties.periods[index].name
let temperature = newData.properties.periods[index].temperature
let shortForecast = newData.properties.periods[index].shortForecast

const weatherResult = document.querySelector(`#weather-result-${index+1}`);
let weatherNameEl = document.createElement('h3');
let temperatureEl = document.createElement('p');
let shortForecastEl = document.createElement('h4');
weatherNameEl.textContent = weatherName;
temperatureEl.textContent = temperature;
shortForecastEl.textContent = shortForecast;
console.log(weatherResult)
weatherResult.appendChild(weatherNameEl);
weatherResult.appendChild(temperatureEl);
weatherResult.appendChild(shortForecastEl);

}   
            })
        })
    });
});

console.log(test);
}