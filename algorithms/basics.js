// The "Basic 13" - Coding Dojo Algorithm Workbook page 27
let arrMixed = [16, 28, "Kevin", "Patrick", 1989, "Fitzhenry", true];
let arrNums = [1, 2, 3, 66, 67, 88, 90, 17];


// Print 1 - 255
// 1 - Print all the integers from 1 to 255
function print255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// print255();

// Print Odds 1 - 255
// 2 - Print all the odd integers from 1 to 255
function printOdds255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
// printOdds255();

// Interate and Print Array
// 3 - Iterate through a given array, printing each value
function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printArray();

// Greater Than Y
// 4 - Given an array and a value Y, count and print the number of array values greater than Y
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
// 5 - Given an array, print the max, the min and average values for that array
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
  console.log(max, min, avg);
}
maxMinAvg(arrNums);
