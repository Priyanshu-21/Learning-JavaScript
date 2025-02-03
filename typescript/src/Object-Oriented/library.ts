class Library {
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

}; 

const l1 = new Library(); // initialization of object 
l1.bookName = "5 Senses"; 
l1.genre = "Fiction"; 
l1.price = 2000.00; 
l1.level = "L1"; 

console.log(`${l1.bookName} is of type ${l1.genre}. It's price is ${l1.price} and please find this at level ${l1.level}`); 


