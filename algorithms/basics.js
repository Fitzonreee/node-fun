// The "Basic 13" - Coding Dojo Algorithm Workbook page 27
let arr = [0, 1, -22, 2, 3, -5, 66, 67, 88, 90, 17, -1];
let arrMixed = [16, 28, "Kevin", "Patrick", 1989, "Fitzhenry", true];
let arrNums = [1, 2, 3, 66, 67, 88, 90, 17];


// Print 1-255
// Print all the integers from 1 to 255
function print255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// print255();

// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far
function print255AndSum() {
  let sum = 0;
  for (var i = 1; i <= 255; i++) {
    sum = sum + i;
    console.log(`value: ${i}, sum: ${sum}`);
  }
}
// print255AndSum();

// Find and Print Max
// Given an array, find and print its largest element
function printMax(arr) {
  let max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
// printMax(arr);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive)

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y
function greaterThanY(arr, y) {
  counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      counter++
    }
  }
  console.log(counter);
}
// greaterThanY(arrNums, 17);

// Max, Min, Average
// Given an array, print the max, the min and average values for that array
function maxMinAvg(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i]
    } else if (arr[i] < min) {
      min = arr[i]
    }
  }
  var avg = sum / arr.length;
  console.log(`The max is ${max}, the min is ${min} and the average is ${avg}`);
}
// maxMinAvg(arrNums);

// Swap String For Array Negative values
// Given an array of numbers, replace any negative values with the string 'Dojo'
function replaceNegs(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
    console.log(arr[i]);
  }
}
// replaceNegs(arr);

// Print Odds 1 - 255
// Print all the odd integers from 1 to 255
function printOdds255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
// printOdds255();

// Interate and Print Array
// Iterate through a given array, printing each value
function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printArray(arrMixed);

// Get and Print Average
// Analyze and array's values and print the avergae
function getAvg(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  const avg = sum / arr.length;
  console.log(`The avergae is ${avg}`);
}
// getAvg(arr);

// Square the values
// Square each value in a given array, returning that same array with changed values
function squareValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(`The following numbers have been squared: ${arr}`);
}
// squareValues(arr);


// Zero Out Negative Numbers
// Return the  given array, after setting any negative values to 0
function zeroOutNegs(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(`Negative numbers replaced with zero: ${arr}`);
}
// zeroOutNegs(arr);

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end
