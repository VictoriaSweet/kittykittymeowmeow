const city = "Austin";
const url = `https://api.weather.gov/points/39.7456,-97.0892`;


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
for (let index = 0; index < 10; index++) {
console.log(newData.properties.periods[index].name)
console.log(newData.properties.periods[index].temperature)
console.log(newData.properties.periods[index].shortForecast) 
let name = newData.properties.periods[index].name
let temperature = newData.properties.periods[index].temperature
let shortForecast = newData.properties.periods[index].shortForecast


}   
            })
        })
    });
});

