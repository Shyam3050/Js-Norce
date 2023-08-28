// like Math.random() are static methods like random() is only for Math constructor function
// static for class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // these methods will added .prototype property
  calcAGe() {
    console.log(2022 - this.birthYear);
  }
  // this method will directly attached to this class
  static hey() {
    console.log("hello world from static method");
    console.log(this); //  refers to its constructor function.
  }
}
const jessica = new PersonCl("shyam helo", 2003);
PersonCl.hey();
// jessica.hey(); this will not work because its hey() is not a prototype of PersonCl

// add static method to function constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
Person.hey = function () {
  console.log("this from constructor function hey");
  console.log(this); // whenever object is calling the method this keyword refers to that object
};
Person.hey();
