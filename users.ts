import { Book } from './books';

/**
 * Represents a user in the library system.
 */
export class User {
  /**
   * The name of the user.
   */
  name: string;

  /**
   * The ID of the user.
   */
  id: string;

  /**
   * The list of books borrowed by the user.
   */
  borrowedBooks: Book[];

  /**
   * Creates a new User.
   * @param name - The name of the user.
   * @param id - The ID of the user.
   */
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }
}
