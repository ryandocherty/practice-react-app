"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//---------- JavaScript Array map() ----------
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
//---------- Examples of using map() on arrays ----------
//Example 1:
(function () {
  var numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100];
  //return the square root of each number in 'numbers' array:
  var squareRoots = numbers.map(Math.sqrt);
  //function to return any given number, times 10:
  var multiplyByTen = function (num) {
    return num * 10;
  };
  //use map() and the multiplyByTen() function:
  var timesTen = numbers.map(multiplyByTen);
  console.log(squareRoots);
  console.log(timesTen);
})();
//Example 2:
(function () {
  var prices = [10, 20, 30, 40, 50, 60];
  var discountedPrices = prices.map(function (price) {
    return parseFloat((price * 0.68).toFixed(2));
  });
  console.log(prices);
  console.log(discountedPrices);
})();
