let arr = [0, 1, -22, 2, 3, -5, 66, 67, 88, 90, 17, -1];
let arrMixed = [16, 28, "Kevin", "Patrick", 1989, "Fitzhenry", true];
let arrNums = [1, 2, 3, 66, 67, 88, 90, 17];

function print255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// print255();

function print255AndSum() {
  let sum = 0;
  for (var i = 1; i <= 255; i++) {
    sum = sum + i;
    console.log(`value: ${i}, sum: ${sum}`);
  }
}
// print255AndSum();

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

function arrOdds() {
  var arrayOdds = [];
  for (var i = 1; i <= 255; i++) {
    if (i % 2 != 0) {
      arrayOdds.push(i);
    }
  }
  console.log(`${arrayOdds}`);
}
// arrOdds();

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

function replaceNegs(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
    console.log(arr[i]);
  }
}
// replaceNegs(arr);

function printOdds255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
// printOdds255();

function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printArray(arrMixed);

function getAvg(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  const avg = sum / arr.length;
  console.log(`The avergae is ${avg}`);
}
// getAvg(arr);

function squareValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(`The following numbers have been squared: ${arr}`);
}
// squareValues(arr);

function zeroOutNegs(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(`Negative numbers replaced with zero: ${arr}`);
}
// zeroOutNegs(arr);

function shiftOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (arr[i] == undefined) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}
// shiftOne(arrNums);
