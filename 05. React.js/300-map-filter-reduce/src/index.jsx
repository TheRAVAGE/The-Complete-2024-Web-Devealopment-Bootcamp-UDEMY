var numbers = [3, 56, 2, 48, 5];
let newNumbers;
//Map -Create a new array by doing something with each item in an array.
console.log("Map : ");
newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
console.log("Filter : ");
var numbers = [3, 56, 2, 48, 5];
newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

console.log("Reduce : ");
var numbers = [3, 56, 2, 48, 5];
newNumbers = numbers.reduce(function (Sum, currentNumber) {
  return Sum + currentNumber;
});
console.log(newNumbers);

//Find - find the first item that matches from an array.

console.log("Find : ");
var numbers = [3, 56, 2, 48, 5];
newNumbers = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

console.log("Find Index : ");
var numbers = [3, 56, 2, 48, 5];
newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers);

//Substring - modifies a piece of text to have certain number of characters .

import emojis from "./emojipedia";
console.log("Original object : ");
console.log(emojis);
console.log("Substring : ");
const newEmojiPedia = emojis.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojiPedia);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
