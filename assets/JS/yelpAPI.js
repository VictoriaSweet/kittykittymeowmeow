//Set to API key
const yelpApiKey = "5KJgDCNwMAcVAmCvRFAqs5QsOiizehW_nA-Njeu_XlfAenCt6ew5tosAX26fz1Seb0TvfGrTPwdJ-yq1HfMx3ap6NqcdDcU50K-TZOjGjDZN3txIaox8L64gxJsDZXYx";
const yelpApiBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses"; //https://cors-anywhere.herokuapp.com


const yelpEl = document.getElementById('yelp-results');
console.log(yelpEl);

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
    console.log(yelpApiBaseUrl)
    fetch(apiUrl, options)
        .then(function (response) {
            response.json().then(function (parkData) {
                console.log(parkData)
                extractData(parkData);
                // parkData.businesses[0].name
                // parkData.businesses[0].image_url
                // parkData.businesses[0].coordinates.latitude
                // parkData.businesses[0].coordinates.longitude
            })
        })
    //.catch(err => console.error(err));
}

function extractData(parkData) {
    for (let index = 0; index < 5; index++) {
        let name = parkData.businesses[index].name
        console.log(parkData.businesses[index].name);

        let image = parkData.businesses[index].image_url;
        // console.log(parkData.businesses[index].image_url);

        let latitude = parkData.businesses[index].coordinates.latitude
        // console.log(parkData.businesses[index].coordinates.latitude);

        let longitude = parkData.businesses[index].coordinates.longitude
        // console.log(parkData.businesses[index].coordinates.longitude);

        let address = parkData.businesses[index].location.display_address[0];
        console.log(address);

        let nameEl = document.createElement('h3');
        let addressEl = document.createElement('p');
        let imageEl = document.createElement('img');

        nameEl.textContent = name;
        nameEl.setAttribute('class', 'park-names');
        addressEl.setAttribute('class', 'park-names');
        imageEl.setAttribute('src', image);
        imageEl.setAttribute('class', 'images');
        addressEl.textContent = address;

        yelpEl.appendChild(nameEl);
        yelpEl.appendChild(addressEl);
        yelpEl.appendChild(imageEl);
    }

}





// // Function to clear previous results
// function clearResults() {
//     //document.getElementById('parkInfo').style.display = 'none';
//     //document.getElementById('reviews').style.display = 'none';
//    // document.getElementById('parkName').textContent = '';
//     //document.getElementById('parkAddress').textContent = '';
//     //document.getElementById('parkPhone').textContent = '';
// }

// // Function to display park information
// function displayParkInfo(park) {
//     let park = data.businesses;
//      document.getElementById('parkName').textContent = park.name;
//      document.getElementById('parkAddress').textContent = park.location.address1;
//      document.getElementById('parkPhone').textContent = park.phone;
//      document.getElementById('parkInfo').style.display = 'block';
// }



// // Function to display reviews for a park
// function displayReviews(parkId) {
//     // Make a Yelp API request to get park reviews
//     const reviewsUrl = `${yelpApiBaseUrl}/${parkId}/reviews`;

//     fetch(reviewsUrl, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${yelpApiKey}`,
//         },
//     })
//     .then(response => response.json())
//     .then(data => {
//         const reviews = data.reviews;
//         const reviewList = document.getElementById('reviewList');

//         if (reviews.length === 0) {
//             reviewList.innerHTML = '<li>No reviews available for this park.</li>';
//         } else {
//             reviewList.innerHTML = '';
//             reviews.forEach(review => {
//                 const listItem = document.createElement('li');
//                 listItem.innerHTML = `<strong>${review.user.name}</strong> - ${review.rating} stars<br>${review.text}`;
//                 reviewList.appendChild(listItem);
//             });
//             document.getElementById('reviews').style.display = 'block';
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         displayMessage('An error occurred while fetching park reviews.');
//     });
// }

// // Function to display a message to the user
// function displayMessage(message) {
//     const messageDiv = document.getElementById('message');
//     messageDiv.textContent = message;
//     messageDiv.style.display = 'block';
// }

// Handle form submission
document.getElementById('search-bar').addEventListener('change', function (e) {
    e.preventDefault();
    const city = document.getElementById('search-bar').value.trim();
    if (city) {
        searchForParks(city);
    }
    console.log(city)
});

// // Initialize the page 
// clearResults();
