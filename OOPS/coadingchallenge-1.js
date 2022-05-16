const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
const bmw = new Car("japan", 120);
const audi = new Car("india", 200);
console.log(bmw);
bmw.accelerate();
bmw.accelerate();
console.log(bmw);
bmw.brake();
audi.accelerate();
audi.brake();
