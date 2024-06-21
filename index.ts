import { Book } from './books';
import { User } from './users';
import { Library } from './library';

// Create a new library instance
const library = new Library();

// Add some books
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890'));
library.addBook(new Book('1984', 'George Orwell', '1234567891'));
library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', '1234567892'));

// Add some users
library.addUser(new User('John Doe', '1'));
library.addUser(new User('Jane Smith', '2'));

// Borrow a book
console.log(library.borrowBook('1', '1234567890')); // true

// Check if a book is available
console.log(library.isBookAvailable('1234567890')); // false

// Return a book
console.log(library.returnBook('1', '1234567890')); // true

// Check if a book is available
console.log(library.isBookAvailable('1234567890')); // true
