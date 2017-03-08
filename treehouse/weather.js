const https = require('https');
const secrets = require('../secrets.js');

// Function to print message to console
function printMessage(weather) {
  const message = `Current temperature in ${weather.current_observation.display_location.full} is ${weather.current_observation.temp_f}F`;
  console.log(message);
}
// printMessage('Los Gatos','64.0F');
// console.log(secrets.weatherApiKey);

// Takes in either a Zip Code or City State (Hollywood CA)
function getWeather(query) {
  // Connect to API URL
  const apiKey = '';
  const request = https.get(`https://api.wunderground.com/api/${secrets.weatherApiKey}/geolookup/conditions/q/${query}.json`, response => {
    // Read the data
    var body = "";
    response.on('data', chunk => {
      body += chunk.toString();
    });
    // Response has finished
    response.on('end', () => {
      // Parsing = turning a string into a data structure (object)
      const weather = JSON.parse(body);
      // console.log(weather);
      // Print the data
      printMessage(weather);
    });
  });
}

// getWeather('95030');
const locations = process.argv.slice(2);
locations.forEach(getWeather);

// TODO: Make with work other syntax: New York NY
// TODO: Add error handling
