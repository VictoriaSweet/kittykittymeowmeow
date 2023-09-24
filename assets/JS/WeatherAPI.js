const WeatherApikey =
  "User-Agent: (myweatherapp.com, contact@myweatherapp.com)";
const WeatherBaseURL =
  "https://cors-anywhere.herokuapp.com/https://https://api.weather.gov/points/39.2672,-97.7431";

const WeatherEl = document.getElementById("weather-results");

function searchForWeather(Forcast) {
  const options = {
    method: "Get",
    headers: {
      origin: "null",
      accept: "application/json",
      Authorization: `bearer ${WeatherApikey}`,
    },
  };

  const WeatherBaseURLFull = `${WeatherBaseURL}`;

  fetch(WeatherBaseURLFull).then(function (response) {
    response.json().then(function (Forcast) {
      extractData(ForcastData);
    });
  });
}
searchForWeather("String");

function extractData(forcastData) {
  for (let index = 0; index < 5; index++) {
    let name = forcastData;
    fetch("https://api.example.com/nonexistent-endpoint")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("API request failed with status " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        // Handle API response data
      })
      .catch(function (error) {
        console.error("API request error:", error);
      });
  }
}

document.getElementById("search-bar").addEventListener("change", function (e) {
  e.preventDefault();
  const forcast = document.getElementById("search-bar").value.trim();
  if (forcast) {
    searchForParks(forcast);
  }
});
document.getElementById("search-bar").addEventListener("click", function (e) {
  e.preventDefault();
  const forcast = document.getElementById("search-bar").value.trim();
  if (forcast) {
    searchForWeather(forcast);
  }
});
