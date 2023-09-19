//Set to API key
const API_Key = "5KJgDCNwMAcVAmCvRFAqs5QsOiizehW_nA-Njeu_XlfAenCt6ew5tosAX26fz1Seb0TvfGrTPwdJ-yq1HfMx3ap6NqcdDcU50K-TZOjGjDZN3txIaox8L64gxJsDZXYx";
const yelpApiBaseUrl = 'https://api.yelp.com/v3/businesses';

// Function to perform a Yelp API search for parks
function searchForParks(city) {
    // Clear previous results
    clearResults();

    // Make a Yelp API request to search for parks
    const searchUrl = `${yelpApiBaseUrl}/search?term=park&location=${city}&categories=parks&limit=5`;

    fetch(searchUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${yelpApiKey}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        const parks = data.businesses;
        if (parks.length === 0) {
            displayMessage('No parks found in the specified location.');
        } else {
            displayParkInfo(parks[0]); // Display details of the first park
            displayReviews(parks[0].id); // Display reviews for the first park
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('An error occurred while fetching park data.');
    });
}

// Function to clear previous results
function clearResults() {
    document.getElementById('parkInfo').style.display = 'none';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('parkName').textContent = '';
    document.getElementById('parkAddress').textContent = '';
    document.getElementById('parkPhone').textContent = '';
    document.getElementById('reviewList').innerHTML = '';
}

// Function to display park information
function displayParkInfo(park) {
    document.getElementById('parkName').textContent = park.name;
    document.getElementById('parkAddress').textContent = park.location.address1;
    document.getElementById('parkPhone').textContent = park.phone;
    document.getElementById('parkInfo').style.display = 'block';
}

// Function to display reviews for a park
function displayReviews(parkId) {
    // Make a Yelp API request to get park reviews
    const reviewsUrl = `${yelpApiBaseUrl}/${parkId}/reviews`;

    fetch(reviewsUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${yelpApiKey}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        const reviews = data.reviews;
        const reviewList = document.getElementById('reviewList');

        if (reviews.length === 0) {
            reviewList.innerHTML = '<li>No reviews available for this park.</li>';
        } else {
            reviewList.innerHTML = '';
            reviews.forEach(review => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${review.user.name}</strong> - ${review.rating} stars<br>${review.text}`;
                reviewList.appendChild(listItem);
            });
            document.getElementById('reviews').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('An error occurred while fetching park reviews.');
    });
}

// Function to display a message to the user
function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}

// Handle form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('locationInput').value.trim();
    if (city) {
        searchForParks(city);
    }
});

// Initialize the page
clearResults();