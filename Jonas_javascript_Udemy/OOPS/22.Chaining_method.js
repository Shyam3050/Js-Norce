// Chaining of Class methods.

class Account {
  constructor(owner, currency, pin, movement) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movement = [];
    this.language = navigator.language;
  }
  deposite(val) {
    this.movement.push(val);
    return this;
  }
  withdraw(val) {
    if (this.totalBalance() >= val) {
      this.movement.push(-val);
    } else {
      alert("utna paisa naira sala ", this.totalBalance(), " ha bank ma");
    }
    return this;
  }
  totalBalance() {
    return this.movement.reduce((prev, curr) => prev + curr, 0);
    return this;
  }
  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposite(val);
    }
  }
}

const acc1 = new Account("jonas", "EUR", 111);

// here we chaining the methods.

acc1.deposite(200).deposite(300).withdraw(2000).withdraw(788).deposite(1000);
