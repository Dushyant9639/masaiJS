// app.js

import { Book } from './Book.js';
import { Member } from './Member.js';
import { PremiumMember } from './PremiumMember.js';

// --- Book Instances ---

// Create sample books to simulate a small library
const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("Sapiens", "Yuval Noah Harari");
const book3 = new Book("1984", "George Orwell");
const book4 = new Book("Brave New World", "Aldous Huxley");
const book5 = new Book("The Hobbit", "J.R.R. Tolkien");
const book6 = new Book("Fahrenheit 451", "Ray Bradbury");

// --- Member Instances ---

// Create one regular and one premium member
const regular = new Member("Alice");
const premium = new PremiumMember("Bob");

// --- Regular Member Borrowing ---

// Attempt to borrow 4 books (only 3 allowed for regular member)
regular.borrowBook(book1); // ✅
regular.borrowBook(book2); // ✅
regular.borrowBook(book3); // ✅
regular.borrowBook(book4); // ❌ exceeds limit

// --- Premium Member Borrowing ---

// Premium member borrows up to 5 books
premium.borrowBook(book4); // ✅
premium.borrowBook(book5); // ✅
premium.borrowBook(book6); // ✅

// --- Borrowing Already Borrowed Book ---

// Regular member tries to borrow a book already taken
regular.borrowBook(book1); // ❌ already borrowed by Alice
regular.borrowBook(book5); // ❌ already borrowed by Bob

// --- Using bind to create a pre-bound borrow function ---

// Create a bound version of borrowBook for Alice
const boundBorrow = regular.borrowBook.bind(regular);
boundBorrow(book6); // ❌ already borrowed

// --- Final Output ---

console.log("\nFinal States:");
console.log("Regular Member:", regular.name, regular.borrowedBooks);
console.log("Premium Member:", premium.name, premium.borrowedBooks);
