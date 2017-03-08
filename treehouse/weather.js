const https = require('https');
const secrets = require('../secrets.js');

// Function to print message to console
function printMessage(loc, temp) {
  const message = `Current temperature in ${loc} is ${temp}`;
  console.log(message);
}
// printMessage('Los Gatos','64.0F');
console.log(secrets.weatherApiKey);

// Takes in either a Zip Code or City State (Hollywood CA)
function getWeather(string) {
  // Connect to API URL (https://teamtreehouse.com/username.json)
  const apiKey = '';
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // Read the data
    var body = "";
    response.on('data', data => {
      body += data.toString();
    });
    // Response has finished
    response.on('end', () => {
      // Parsing = turning a string into a data structure (object)
      const weather = JSON.parse(body);
      // Print the data
      // These are fake data
      printMessage(weather.loc, weather.temp);
    });
  });
}

// getWeather('90201');

// const locations = process.argv.slice(2);
// locations.forEach(getWeather);
