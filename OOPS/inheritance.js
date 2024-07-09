/*
// inheriance in constructor 

function BankAccount( coustomerName , balance = 0 ) {
  this.coustomerName = coustomerName;
  this.coustomerId = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
}

// Saving Account
function SavingAccount( coustomerName , balance = 0 ) {
  //Constructor linking (inheriting)
  BankAccount.call(this, coustomerName,balance);
  this.transactionLimit = 10000;
}

// linking prototype (inheriting prototype)
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takeBusinessLoan = function (amount) {
  console.log(`taking business loan of ${amount}`);
}

// Creating object 

const raj = new SavingAccount("raj",500);
raj.deposit(500);
raj.takeBusinessLoan(29999);
console.log(raj);
*/

// Inheritance in classes
class BankAccount {
  coustomerName;
  balance;
  coustomerId;

  constructor(coustomerName , balance =0) {
    this.coustomerName = coustomerName;
    this.balance = balance;
    this.coustomerId = Date.now();
  }
  
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount{
  transactionLimit = 50000;
    
  constructor (coustomerName, balance = 0) {
    //super calls the constructor of its parent class to access the parent's properties and methods.
    super(coustomerName, balance);
    
  }

  takeBusinessLoan (amount) {
    console.log(`takeing business loan of ${amount}`);
  }
}

const raj = new CurrentAccount("raj",100);
console.log(raj);
raj.deposit(3999);
raj.takeBusinessLoan(20000);
console.log(raj);
