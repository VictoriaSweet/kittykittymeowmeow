const city = "Austin";
const url = `https://api.weather.gov/points/39.7456,-97.0892`;
let forecast;
const yelpApiKey = `5KJgDCNwMAcVAmCvRFAqs5QsOiizehW_nA-Njeu_XlfAenCt6ew5tosAX26fz1Seb0TvfGrTPwdJ-yq1HfMx3ap6NqcdDcU50K-TZOjGjDZN3txIaox8L64gxJsDZXYx`

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

            })

        })

    });
});

