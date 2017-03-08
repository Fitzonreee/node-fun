var math = require("./math");
var fs = require("fs");
var _ = require("lodash");
var axios = require("axios");

console.log("Sweetest nector!");

// 2 - Running Files
// console.log(math);
var masterArray = [2,5,6,8];

function getAvg(array) {
  var sum = 0;
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    counter++;
  }
  var result = sum / counter;
  console.log(result);
}
// getSum(masterArray);

// 3 - Builtin/CommonJS Modules
var m = fs.readFileSync("./_builtin-modules.txt", "utf-8");
// console.log(m);

//Create a file
function createFile(filename, textBody) {
  fs.writeFileSync("./_" + filename + ".txt", textBody);
}

// createFile("new", "Contents of the file");

// 4 - NPM Modules
// axios.get("https://teamtreehouse.com/kevinfitzhenry.json").then((res) => {
//   var css = _.find(res.data.badges, {name: "CSS: Cascading Style Sheets"});
//   console.log(css);
  // console.log(res.data);
  // console.log(res.data.points);

// })

// add nodemon --save-dev in this project
// npm run dev
