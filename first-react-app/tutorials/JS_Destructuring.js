//https://www.w3schools.com/js/js_destructuring.asp

//NOTE - Im wrapping these demonstrations inside self-invoking fucntions,
//       so that I don't keep having to write person1, person2, person3 etc.

//---------- JavaScript Destructuring ----------

//The destructuring assignment syntax unpacks Object properties into variables:
//  let { firstName, lastName } = person;

//It can also unpack arrays and other iterables:
//  let [firstName, lastName] = person;

//---------- Object Destructuring Example ----------

//Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//Destructure the Object:
let { firstName, lastName } = person;
//Note - the order of the properties does not matter
//This would also work:
//  let { lastName, firstName } = person;

//Display primitive values:
console.log(firstName + ` ` + lastName);

//NOTE:
//Destructuring is not destructive
//Destructuring does not change the original Object

//---------- Object Default Values ----------
//For potentially missing properties, we can set default values:

(function () {
  const person = {
    firstName: "Jim",
    lastName: "Flimbo",
    age: 30,
  };

  let { firstName, lastName, location = "Earth" } = person;
  console.log(`\n` + firstName + ` ` + lastName + `, ` + location);
})();

//---------- Object Property Alias ----------

(function () {
  const person = {
    firstName: "Bob",
    lastName: "Bobington",
    age3: 50,
  };

  let { lastName: name } = person;
  console.log(`\n` + name);
})();

//---------- String Destructuring ----------
//One use for destructuring is unpacking string characters:

(function () {
  let name = "Christopher";
  let [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11] = name;
  console.log(`\n` + a1 + ` ` + a11);
})();

//NOTE - destructuring can be used with any iterables

//---------- Array Destructuring ----------
//We can pick up array elements and move them into single variables:

(function () {
  const fruits = ["Bananas", "Apples", "Oranges"];
  let [fruit1, fruit2] = fruits;
  console.log(`\n` + fruit1 + `, ` + fruit2);
})();

//---------- Skipping Array Values ----------
//We can skip array values by using two or more commas:

(function () {
  const fruits = ["Oranges", "Bananas", "Apples", "Mangos"];
  let [fruit1, , , fruit2] = fruits;
  console.log(`\n` + fruit1 + `, ` + fruit2);
})();

//---------- Array Position Values ----------
//We can pick up values from specific index locations of an array:

(function () {
  const fruits = ["Bananas", "Oranges", "Apples", "Mangos", "Pears"];
  let { [0]: fruit1, [1]: fruit2, [4]: fruit3 } = fruits;
  console.log(`\n` + fruit1 + `, ` + fruit2 + `, ` + fruit3);
})();

//---------- The Rest Property ----------
//You can end a destructuring syntax with a 'rest' property.
//This syntax will store all remaining values into a new array:

(function () {
  const numbers = [10, 20, 30, 40, 50, 60, 70];
  const [a, b, ...rest] = numbers;
  console.log(`\n` + `Element a: ` + a);
  console.log(`Element b: ` + b);
  console.log(`Remaining Elements: ` + rest);
})();

//---------- Destructuring Maps ----------

(function () {
  const fruits = new Map([
    [`Apples`, 500],
    [`Bananas`, 300],
    [`Oranges`, 200],
  ]);

  let text = ``;
  for (const [key, amount] of fruits) {
    text += key + ` amount is: ` + amount + `\n`;
  }
  console.log(`\n` + text);
})();

//---------- Swapping JavaScript Variables ----------
//You can swap the values of two variables using a destructuring assignment:

(function () {
  let firstName = `John`;
  let lastName = `Doe`;
  [firstName, lastName] = [lastName, firstName];
  console.log(firstName + ` ` + lastName);
})();
