function BankAccount( coustomerName , balance = 0 ) {
  this.balance = balance;
  this.coustomerId = Date.now();
  this.coustomerName = coustomerName;
} 

const dry = new BankAccount("dry" , 2000);
const fry = new BankAccount("fry");

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
}
fry.deposit(3000);
console.log(dry,fry);
