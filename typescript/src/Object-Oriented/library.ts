class Library {
    // Class Variable 
    static bookCover: string; 

    // Object Variable 
    bookName!: string
    genre!: string; 
    price!: number; 
    level!: string;
    
    // Initializor 
    Library (bookName: string, genre: string, price: number, level: string) {
        this.bookName = bookName; 
        this.genre = genre; 
        this.price = price; 
        this.level = level; 

    }

    // functions 
    timeToBuy(level: string): string {
        switch (level) {
            case "L1": return "20 Minutes";
            case "L2": return "30 Minutes"; 
            case "L3": return "40 Minutes"; 
            default: return "Book is not available"; 
        }
    }
    

}; 

const l1 = new Library(); // initialization of object 
l1.bookName = "5 Senses"; 
l1.genre = "Fiction"; 
l1.price = 2000.00; 
l1.level = "L1"; 

console.log(`${l1.bookName} is of type ${l1.genre}. It's price is ${l1.price} and please find this at level ${l1.level}`); 

const calBook1 = l1.timeToBuy(l1.level); 
console.log(calBook1);

const l2 = new Library(); // initialization of object 
l2.bookName = "Harry Potter"; 
l2.genre = "Fiction"; 
l2.price = 12000.00; 
l2.level = "L2"; 
Library.bookCover = "Not Famous"; 
console.log(Library.bookCover); 
const calBook2 = l2.timeToBuy(l2.level); 
console.log(calBook2);

console.log(l2.timeToBuy);

const l3 = new Library(); // initialization of object 
l3.bookName = "Sapien"; 
l3.genre = "Motivation"; 
l3.price = 1000.00; 
l3.level = "L3"; 
Library.bookCover = "Famous"; 
console.log(Library.bookCover); 

