"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(balance) {
        var _this = _super.call(this, balance) || this;
        _this.balance = balance;
        return _this;
    }
    CheckingAccount.prototype.writeCheck = function (debit) {
        this.balance -= debit;
        return this.balance;
    };
    return CheckingAccount;
}(BankAccount));
exports.CheckingAccount = CheckingAccount;
// run tsc solution.ts before running the test file
