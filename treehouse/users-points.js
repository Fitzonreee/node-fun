// 'use strict';
// node treehouse/users-points

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information and print out

const https = require('https');
// const username = 'kevinfitzhenry';

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badge(s) and ${points} total points`;
  console.log(message);
}
// printMessage('kfitzhenry', 189, 23430);

function getProfile(username) {
  // Connect to API URL (https://teamtreehouse.com/username.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // Read the data
    var body = "";
    response.on('data', data => {
      body += data.toString();
    });
    // Response has finished
    response.on('end', () => {
      // Parsing = turning a string into a data structure (object)
      const profile = JSON.parse(body);
      // Print the data
      printMessage(username, profile.badges.length, profile.points.total);
    });
  });
}

// getProfile('kevinfitzhenry');
// getProfile('alenaholligan');

const users = ["kevinfitzhenry", "chalkers", "alenaholligan"];
// users.forEach(username => {
//   getProfile(username);
// });
// Or
users.forEach(getProfile);
