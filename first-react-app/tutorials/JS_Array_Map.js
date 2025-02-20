//---------- JavaScript Array map() ----------

//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.

//---------- Examples of using map() on arrays ----------

const numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100];

//return the square root of each number in 'numbers' array:
const squareRoots = numbers.map(Math.sqrt);

//function to return any given number, times 10:
const multiplyByTen = (num) => num * 10;

//use map() and the multiplyByTen() function:
const timesTen = numbers.map(multiplyByTen);

console.log(squareRoots);
console.log(timesTen);
