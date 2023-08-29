// // using class method
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at speed at ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at speed at ${this.speed}`);
//   }
// }
// class Ev extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }
// }
// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
//   );
// };
// const tesla = new Ev("Tesla", 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// console.log(tesla);

// using function constructor
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at speed at ${this.speed}`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};
const tesla = new Ev("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
