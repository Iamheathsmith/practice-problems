
export class BankAccount {
  constructor(public balance: number) {
  }
  deposit(credit: number) {
    this.balance += credit;
    return this.balance;
  }
}


export class CheckingAccount extends BankAccount {
  constructor(public balance: number) {
    super(balance);
  }
  writeCheck(debit: number) {
    this.balance -= debit;
    return this.balance;
  }
}


// run tsc solution.ts before running the test file
