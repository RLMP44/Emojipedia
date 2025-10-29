var numbers = [3, 56, 2, 48, 5];

// function double(x) {
//   return x * 2;
// }
// // don't need to pass as map((num) => double(num))
// const newNumbers = numbers.map(double);
// map takes an array and returns the altered array
const mappedNumbers = numbers.map(function (x) {
  return x * 2;
});

//Filter - returns new array by keeping items that return true
const filteredNums = numbers.filter(function (num) {
  return num < 10;
});

//Reduce - Accumulate a value by doing something to each item in an array
// accumulator acts as updated starting variable i.e. newNum = 0;
const reducedNums = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

//Find - find the first number that matches from an array
const foundNum = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches
const foundIndex = numbers.findIndex(function (num) {
  return num > 10;
});
