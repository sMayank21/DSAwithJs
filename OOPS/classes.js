class BankAccount {
  coustomerName;
  accountNumber;
  balance;
  
  constructor(coustomerName , balance = 0) {
    this.coustomerName = coustomerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit (amount) {
    this.balance += amount;
  }

  withdraw (amount) {
    this.balance -= amount;
  }
}

const raj = new BankAccount("raj");
raj.deposit(200);
console.log(raj);
