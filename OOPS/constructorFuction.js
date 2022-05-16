"use strict";
// Constractor function
// it's like normal function but here first letter wil be capital.
// for calling this use new keyword.
// finaly constructor function returns the object

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this for creatin methods
  // because when you create like this then all the instances can carry those method then it cause slow down the code.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
// Exicution of constructor function
// 1 new {} empty object is created
// 2 funtion is called, refer this keyword to newly created obect{}
// 3 {} object is linked to prototype
// 4 function automatically return {}; like in above example firstName: "" , birthYear: "" returned.

const jonas = new Person("jonas", 1991);
console.log(jonas);

new Person("shyam", 19); // this is called but never stored in any variable
const matelis = new Person("matelia", 2001);
console.log(matelis);

console.log(jonas instanceof Person); // its check the jonas is instance or not
