// Each and every function in javascript have automatically property called prototype that includes also constructor function.
// Every object is created by constructor function will get access to all the methods and property that we define on constructor prototype property. 
// 

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2032 - this.firstName);
};
const jonas = new Person(2, 3);
jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(jonas.__proto__ === Person.__proto__); // false
console.log(Person.prototype === Person.prototype); // false
// constructor funcion doesn't have the __proto__ them self. __proto__ used to access prototype of instances.
console.log(Person.prototype.isPrototypeOf(jonas));
// Person.prototype is not have some property of Person
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species);
console.log(jonas.hasOwnProperty("species"));

// ///////////////////////////
// //////////////////////////

// prototype inheritance on built in object
// const Person = function(firstName){
//   this.firstName = firstName
// }
// const jonas = new Person("shyam");
// console.log(jonas.__proto__.__proto__ === Object.prototype); // true
// console.log(jonas.__proto__.__proto__.__proto__); //null

// const arr =[1,2,3,4,5]
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);

