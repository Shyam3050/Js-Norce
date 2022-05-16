"use strict";
// class expression
// behind the scene classes are function so they have class expression & decleartion
// const PersonCl = class {

// }
// for some reason jonas prefer function decleration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // these methods will added .prototype property
  calcAGe() {
    console.log(2022 - this.birthYear);
  }
}
const jessica = new PersonCl("shyam", 2003);
console.log(jessica);
jessica.calcAGe();
console.log(PersonCl.prototype);

PersonCl.prototype.geek = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.geek();

// Note:
//  classes are not hoisted in js even class decleartion
// classes are special type of function
// classes are activated in strict mode
