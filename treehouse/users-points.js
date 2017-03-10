// 'use strict';
// node treehouse/users-points.js

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information and print out

const https = require('https');
// Require just for status codes
const http = require('http');
// const username = 'kevinfitzhenry';

// Print Error Messages
function printError(error) {
  console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badge(s) and ${points} total points`;
  console.log(message);
}
// printMessage('kfitzhenry', 189, 23430);

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

// getProfile('kevinfitzhenry');
// getProfile('alenaholligan');

// get console inputs through the process object
// console.log(process.argv);

const users = process.argv.slice(2);
users.forEach(getProfile);

// Or
// users.forEach(username => {
//   getProfile(username);
// });

// TODO: Add error handling
