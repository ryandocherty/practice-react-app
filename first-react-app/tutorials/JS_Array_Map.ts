export {};
//---------- JavaScript Array map() ----------

//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.

//---------- Examples of using map() on arrays ----------

//Example 1:
(function () {
  const numbers: number[] = [4, 9, 16, 25, 36, 49, 64, 81, 100];

  //return the square root of each number in 'numbers' array:
  const squareRoots: number[] = numbers.map(Math.sqrt);

  //function to return any given number, times 10:
  const multiplyByTen = (num: number) => num * 10;

  //use map() and the multiplyByTen() function:
  const timesTen: number[] = numbers.map(multiplyByTen);

  console.log(squareRoots);
  console.log(timesTen);
})();

//Example 2:
(function () {
  const prices = [10, 20, 30, 40, 50, 60];
  const discountedPrices: number[] = prices.map((price) =>
    parseFloat((price * 0.68).toFixed(2))
  );
  console.log(prices);
  console.log(discountedPrices);
})();
