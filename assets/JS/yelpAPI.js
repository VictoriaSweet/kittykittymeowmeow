const yelpApiKey =
  "5KJgDCNwMAcVAmCvRFAqs5QsOiizehW_nA-Njeu_XlfAenCt6ew5tosAX26fz1Seb0TvfGrTPwdJ-yq1HfMx3ap6NqcdDcU50K-TZOjGjDZN3txIaox8L64gxJsDZXYx";
const yelpApiBaseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses"; //https://cors-anywhere.herokuapp.com

const yelpEl = document.getElementById("yelp-results");

// Function to perform a Yelp API search for parks
function searchForParks(city) {
  const options = {
    method: "GET",
    headers: {
      Origin: "null",
      accept: "application/json",
      Authorization: `bearer ${yelpApiKey}`,
    },
  };
  const apiUrl = `${yelpApiBaseUrl}/search?location=${city}&term=park&sort_by=best_match&limit=20`;

  fetch(apiUrl, options).then(function (response) {
    response.json().then(function (parkData) {
      extractData(parkData);
    });
  });
}

//getting park data out of API
function extractData(parkData) {
  for (let index = 0; index < 5; index++) {
    const parkResult = document.querySelector(`#park-result-${index + 1}`);
    let name = parkData.businesses[index].name;

    let image = parkData.businesses[index].image_url;

    let lat = parkData.businesses[index].coordinates.latitude;

    let long = parkData.businesses[index].coordinates.longitude;

    let address = parkData.businesses[index].location.display_address[0];

    let nameEl = document.createElement("h3");
    let addressEl = document.createElement("p");
    let latEl = document.createElement("p");
    let longEl = document.createElement("p");
    let imageEl = document.createElement("img");
    nameEl.textContent = name;
    latEl.textContent = lat;
    longEl.textContent = long;
    nameEl.setAttribute("class", "park-names");
    addressEl.setAttribute("class", "park-names");
    imageEl.setAttribute("src", image);
    imageEl.setAttribute("class", "images");
    addressEl.textContent = address;

    parkResult.innerText = "";
    parkResult.appendChild(nameEl);
    parkResult.appendChild(addressEl);
    parkResult.appendChild(imageEl);
    parkResult.appendChild(latEl);
    parkResult.appendChild(longEl);

    parkResult.addEventListener("click", function (response) {
      getWeatherData(lat, long);
    });
  }
}

let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function (response) {});

// let weatherButton = document.querySelector("parkResult");

//properties.periods[index].icon

document.getElementById("search-bar").addEventListener("change", function (e) {
  e.preventDefault();

  const city = document.getElementById("search-bar").value.trim();

  let rainOrShineSearches = [];
  if (localStorage.getItem("rainOrShineOldSearches")) {
    rainOrShineSearches.push(localStorage.getItem("rainOrShineOldSearches"));
    rainOrShineSearches.push(city);
  } else {
    rainOrShineSearches = city;
  }

  localStorage.setItem("rainOrShineOldSearches", rainOrShineSearches);

  if (city) {
    searchForParks(city);
  }

  function displaySearchHistory() {
    let searchHistory = document.querySelector("select");
    let select = localStorage.getItem("key");

    localStorage.setItem("key", "");

    if ((localStorageSearchHistory = null)) {
      SearchHistory = JSON.parse(localStorageSearchHistory);
      return localStorageSearchHistory.getItem("key");
    }
  }
});
