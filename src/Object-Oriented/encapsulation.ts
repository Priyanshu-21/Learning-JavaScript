// Introduction to encapsulation, access Modifiers 
class Bank {
    accountNumber!: number; 
    customerId!: number; 
    name!: string; 
    private amount: number = 0; 

    deposite(value: number): void {
        this.amount += value; 
    }

    printDetails(): void {
        console.log(`This account belongs to ${this.name} with amount ${this.amount}`)
    }

    getAmount(): number {
        return this.amount; 
    }
}; 

class Changeamount extends Bank {
    change(value: number) {
        this.amount = value; 
    }
}

const account1 = new Changeamount(); 

account1.change(350e9);

account1.printDetails(); 
console.log(account1.getAmount()); 
// this is printing property for Changeamount class and not for Bank class
// Bank class property amount is never changing as it's private accessed. 