const https = require('https');
const http = require('http'); // Require just for status codes

// Print Error Messages
function printError(error) {
  console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badge(s) and ${points} total points`;
  console.log(message);
}

function getProfile(username) {
  try {
    // Connect to API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200) {
        // Read the data
        var body = "";
        response.on('data', data => {
          body += data.toString();
        });
        // Response has finished
        response.on('end', () => {
          try {
            // Parsing = turning a string into a data structure (object)
            const profile = JSON.parse(body);
            // Print the data
            printMessage(username, profile.badges.length, profile.points.total);
          } catch (error) {
            printError(error)
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });
    request.on('error', printError);
  } catch (error) {
    printError(error)
  }
}

module.exports.getProfile = getProfile;
