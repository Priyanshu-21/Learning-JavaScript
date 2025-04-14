"use strict";
// Introduction to encapsulation, access Modifiers 
class Bank {
    accountNumber;
    customerId;
    name;
    amount = 0;
    deposite(value) {
        this.amount += value;
    }
    printDetails() {
        console.log(`This account belongs to ${this.name} with amount ${this.amount}`);
    }
    getAmount() {
        return this.amount;
    }
}
;
class Changeamount extends Bank {
    change(value) {
        this.amount = value;
    }
}
const account1 = new Changeamount();
account1.change(350e9);
account1.printDetails();
console.log(account1.getAmount());
// this is printing property for Changeamount class and not for Bank class
// Bank class property amount is never changing as it's private accessed. 
//# sourceMappingURL=encapsulation.js.map