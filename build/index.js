"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("./books");
const users_1 = require("./users");
const library_1 = require("./library");
// Create a new library instance
const library = new library_1.Library();
// Add some books
library.addBook(new books_1.Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890'));
library.addBook(new books_1.Book('1984', 'George Orwell', '1234567891'));
library.addBook(new books_1.Book('To Kill a Mockingbird', 'Harper Lee', '1234567892'));
// Add some users
library.addUser(new users_1.User('John Doe', '1'));
library.addUser(new users_1.User('Jane Smith', '2'));
// Borrow a book
console.log(library.borrowBook('1', '1234567890')); // true
// Check if a book is available
console.log(library.isBookAvailable('1234567890')); // false
// Return a book
console.log(library.returnBook('1', '1234567890')); // true
// Check if a book is available
console.log(library.isBookAvailable('1234567890')); // true
