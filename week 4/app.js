// Step 1: Get your API key from OpenWeatherMap.
const apiKey = '31e72bb940eaee97a83f6b68c4979477';

// Step 2: Create variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById('cityInput');
const btn = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

// Step 3: Add an event listener to the button to detect when it is clicked.
btn.addEventListener('click', () => {
    // Step 4: Get the value of the input field (city name).
    const city = cityInput.value;

    if (city.trim() === '') {
        alert('Please enter a city name.');
    } else {
        // Step 5: Make an HTTP request to the OpenWeatherMap API to fetch the weather data for the entered city.
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Step 7: Update the weather info div with the weather details.
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                // Create a new div element to contain the new search result
                const newSearchResult = document.createElement('div');
                newSearchResult.innerHTML = `
                    <p>The weather in ${city} is ${weatherDescription}.</p>
                    <p>The temperature is ${temperature}°C with a wind speed of ${windSpeed} m/s.</p>`;

                // Add a horizontal line between old and new results
                const horizontalLine = document.createElement('hr');

                // Insert the line, new result, and previous content
                weatherInfo.insertBefore(horizontalLine, weatherInfo.firstChild);
                weatherInfo.insertBefore(newSearchResult, weatherInfo.firstChild);
            })
            .catch(error => {
                // Step 6: Error handling
                const errorResult = document.createElement('div');
                errorResult.innerHTML = `<p>Failed to fetch weather information for ${city}</p>`;

                console.error('Error:', error);
            });
    }
});
