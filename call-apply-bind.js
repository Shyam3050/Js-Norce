"use strict";

let name = {
  firstName: "shyam",
  lastName: "sundar",
};
let printFullName = function (place) {
  console.log(this.firstName + " " + this.lastName + " " + place);
};
printFullName.call(name, "uk");

let name2 = {
  firstName: "sachin",
  lastName: "tendulkar",
};

// call()
// using call method we can borrow function from other object and use it other object
// first argument of call method is reference to this variable.
// remaings are normal arguments of function
printFullName.call(name2, "india");

// apply()
// apply method 1 arguement has reference to this variable and second argument has array list
console.log("-------");
printFullName.apply(name2, ["india", "mumbai"]);

let printMyName = printFullName.bind(name2, "india");
console.log("-------");
printMyName();
// summary of call(), apply(),bind()
//  call() - which is used to call/invoke a function directly by passing in the reference which points to this inside of the function
// apply() - it's also same but isted of passing individual it passes array list
// bind() - bind method doesn't invoked directly .its gives copy of same method which invoked later.
