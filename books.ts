/**
 * Represents a book in the library.
 */
export class Book {
  /**
   * The title of the book.
   */
  title: string;

  /**
   * The author of the book.
   */
  author: string;

  /**
   * The ISBN of the book.
   */
  isbn: string;

  /**
   * Indicates if the book is available for borrowing.
   */
  isAvailable: boolean;

  /**
   * Creates a new Book.
   * @param title - The title of the book.
   * @param author - The author of the book.
   * @param isbn - The ISBN of the book.
   */
  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}
