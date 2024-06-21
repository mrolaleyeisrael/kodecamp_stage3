"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
/**
 * Represents a book in the library.
 */
class Book {
    /**
     * Creates a new Book.
     * @param title - The title of the book.
     * @param author - The author of the book.
     * @param isbn - The ISBN of the book.
     */
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
}
exports.Book = Book;
