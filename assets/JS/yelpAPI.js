//Set to API key
const yelpApiKey = "5KJgDCNwMAcVAmCvRFAqs5QsOiizehW_nA-Njeu_XlfAenCt6ew5tosAX26fz1Seb0TvfGrTPwdJ-yq1HfMx3ap6NqcdDcU50K-TZOjGjDZN3txIaox8L64gxJsDZXYx";
const yelpApiBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses"; //https://cors-anywhere.herokuapp.com


const yelpEl = document.getElementById('yelp-results');

// Function to perform a Yelp API search for parks
function searchForParks(city) {
    const options = {
        method: 'GET',
        headers: {
            Origin: "null",
            accept: 'application/json',
            Authorization: `bearer ${yelpApiKey}`
        }
    };
const apiUrl = `${yelpApiBaseUrl}/search?location=${city}&term=park&sort_by=best_match&limit=20`;


fetch(apiUrl, options)
.then(function (response) {
response.json().then(function (parkData) {
console.log(parkData)
extractData(parkData);
})
})

}

//getting park data out of API 
function extractData(parkData) {
for (let index = 0; index < 5; index++) {
    const parkResult = document.querySelector(`#park-result-${index+1}`);

let name = parkData.businesses[index].name

let image = parkData.businesses[index].image_url;



let latitude = parkData.businesses[index].coordinates.latitude



let longitude = parkData.businesses[index].coordinates.longitude
// console.log(parkData.businesses[index].coordinates.longitude);

//fix the code to display the street address and the street name with city, state and zip code**
// let address = parkData.businesses[index].location;
// console.log(address);

let address = parkData.businesses[index].location.display_address[0];
console.log(address);

//** put all the items in a box and add 'click' event to get the weather for the day**
let nameEl = document.createElement('h3');
let addressEl = document.createElement('p');
let imageEl = document.createElement('img');
nameEl.textContent = name;
nameEl.setAttribute('class', 'park-names');
addressEl.setAttribute('class', 'park-names');
imageEl.setAttribute('src', image);
imageEl.setAttribute('class', 'images');
addressEl.textContent = address;
//object traversal, turn the object into an array 
parkResult.appendChild(nameEl);
parkResult.appendChild(addressEl);
parkResult.appendChild(imageEl);

}

}
// Get a reference to the button element
const submitButton = document.querySelector('.submit');

// Add an event listener to the button
submitButton.addEventListener('click', function(
    response 
) {
    // Your code to handle the button click goes here
    console.log("submit button response");
});



// Handle form submission
//search bar
document.getElementById('search-bar').addEventListener('change', function (e) {
e.preventDefault();
//**insert submit button
// add  'click' event listener**
const city = document.getElementById('search-bar').value.trim();
if (city) {
searchForParks(city);
}


// **be able to mark previous searches as favorites **
// and to be able to go back to them with the updated weather for the day**
// **make icon a star but if not that ok, just have something**

// display search history**
function displaySearchHistory() {
    //"select" is class tag 
let searchHistory = document.querySelector("select");
let select = localStorage.getItem("key");

localStorage.setItem('key', '');

//retrieve search history 
if (localStorageSearchHistory = null) {
// **if key is found in local storage, show found key in console
SearchHistory = JSON.parse(localStorageSearchHistory);
return localStorageSearchHistory.getItem("key");
//display Austin
}
console.log(displaySearchHistory)
}




});