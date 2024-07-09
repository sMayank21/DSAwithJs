function BankAccount(coustomerName , balance = 0) {
  this.coustomerName = coustomerName;
  this.cusotmerId = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  // arrow function 
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
// const jimmy = new BankAccount("jimmy",2000);
// const hish = new BankAccount("hishi");
// // We can change data inside of an object
// hish.balance = 3000;
// // adding money into the account
// hish.deposit(2000);
// // taking money out from the account
// jimmy.withdraw(500);

// console.log(jimmy, hish);

// Create account
const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
// Deposit

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');


accountForm.addEventListener('submit',(e) => {
  // preventDefault() will stop page from getting autmatic referesh
  e.preventDefault();
  const account = new BankAccount(customerName.value , +balance.value); // here + is used to type change balance from string to int 
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.cusotmerId=== +accountNumber.value 
    );
  account.deposit(+amount.value);
  console.log(accounts);
});

