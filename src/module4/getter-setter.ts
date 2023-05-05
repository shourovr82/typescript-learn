class BankAccount {
  public id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  // getter
  get balance(): number {
    return this._balance;
  }
  // method
  getBalance(): number {
    return this._balance;
  }
  // setter
  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }
  // addDeposit(amount: number) {
  //   this._balance = this._balance + amount
  // }
}

class StudentAccount extends BankAccount {
  test() {
    this._balance
  }
}

const myAccount = new BankAccount(444, "Shafin", 230);
// myAccount.addDeposit(20)
// myAccount.getBalance();
// myAccount.getBalance()

console.log(myAccount.balance);
myAccount.deposit = 300;
console.log(myAccount.balance);


