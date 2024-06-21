"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
 * Represents a user in the library system.
 */
class User {
    /**
     * Creates a new User.
     * @param name - The name of the user.
     * @param id - The ID of the user.
     */
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
}
exports.User = User;
