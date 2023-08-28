// getter and setter are the features of js Every Object in javascript have getter and setter property
// getter and setter
const person = {
    owner: "jonas",
    movement: [10, 54, 64, 23],
    get latest() {
      return this.movement.slice(-1).pop();
    },
    // the setter accept only one parameter
    set latest(mov) {
      this.movement.push(mov);
    },
  };
  
  person.latest = 444;
  console.log(person.latest);
  
  console.log(person.movement);
  
  // how setter and getter works in classes
  
