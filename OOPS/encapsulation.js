class BankAccount {
  coustomerName;
  #balance;
  constructor(coustomerName, balance = 0) {
    this.coustomerName = coustomerName;
    this.coutomerId = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  set balance (amount) {
    if(isNaN(amount)){
      throw new Error("Amount is not a valid input");
    }
    this.#balance += amount;
  }
  get balance(){
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;
  constructor (coustomerName , balance = 0) {
    super(coustomerName,balance);
  }

  #calculatingInterest(amount){
    console.log(`calculating Interest`);
  };

  businessLoan(amount) {
    this.#calculatingInterest(amount);
    console.log(`Loan taken is ${amount}`);
  }
}

const raj = new CurrentAccount("raj", 1000);
raj.calculatingInterest(20000);
console.log(raj);
