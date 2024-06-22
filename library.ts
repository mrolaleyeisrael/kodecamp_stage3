import { Book } from './books';
import { User } from './users';

/**
 * Manages books and users in the library.
 */
export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  /**
   * Adds a book to the library.
   * @param book - The book to add.
   */
  addBook(book: Book): void {
    this.books.push(book);
  }

  /**
   * Removes a book from the library by ISBN.
   * @param isbn - The ISBN of the book to remove.
   * @returns Whether the book was successfully removed.
   */
  removeBook(isbn: string): string {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
      return ("Book removed");
    }
    return ("Book not found");
  }

  /**
   * Searches for books in the library by a query.
   * @param query - The search query (title, author, or ISBN).
   * @returns A list of books that match the query.
   */
  searchBook(query: string): Book[] {
    return this.books.filter(book =>
      book.title.includes(query) || book.author.includes(query) || book.isbn.includes(query)
    );
  }

  /**
   * Adds a user to the library.
   * @param user - The user to add.
   */
  addUser(user: User): void {
    this.users.push(user);
  }

  /**
   * Removes a user from the library by ID.
   * @param id - The ID of the user to remove.
   * @returns Whether the user was successfully removed.
   */
  removeUser(id: string): string {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return ("User removed!");
    }
    return ("User not found!");
  }

  /**
   * Searches for users in the library by a query.
   * @param query - The search query (name or ID).
   * @returns A list of users that match the query.
   */
  searchUser(query: string): User[] {
    return this.users.filter(user =>
      user.name.includes(query) || user.id.includes(query)
    );
  }

  /**
   * Allows a user to borrow a book from the library.
   * @param userId - The ID of the user borrowing the book.
   * @param isbn - The ISBN of the book to borrow.
   * @returns Whether the book was successfully borrowed.
   */
  borrowBook(userId: string, isbn: string): string {
    const user = this.users.find(user => user.id === userId);
    const book = this.books.find(book => book.isbn === isbn && book.isAvailable);

    if (user && book) {
      user.borrowedBooks.push(book);
      book.isAvailable = false;
      return "Book borrowing completed";
    }
    return "Book borrowing completed";
  }

  /**
   * Allows a user to return a book to the library.
   * @param userId - The ID of the user returning the book.
   * @param isbn - The ISBN of the book to return.
   * @returns Whether the book was successfully returned.
   */
  returnBook(userId: string, isbn: string): string {
    const user = this.users.find(user => user.id === userId);
    const book = user?.borrowedBooks.find(book => book.isbn === isbn);

    if (user && book) {
      user.borrowedBooks = user.borrowedBooks.filter(b => b.isbn !== isbn);
      book.isAvailable = true;
      return "Book returned successfully";
    }

    return "Book returning failed";
  }

  /**
   * Checks if a book is available for borrowing.
   * @param isbn - The ISBN of the book to check.
   * @returns Whether the book is available.
   */
  isBookAvailable(isbn: string): string|boolean {
    const book = this.books.find(book => book.isbn === isbn);
    return book ? book.isAvailable : "Book is not available";
  }
}
