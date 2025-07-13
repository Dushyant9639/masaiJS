// Constructor function for Member
// Initializes member's name and an empty borrowedBooks array
export function Member(name) {
  this.name = name;
  this.borrowedBooks = [];
}

// Add borrowBook method to Member prototype
// Allows members to borrow up to 3 books if available
Member.prototype.borrowBook = function(book) {
  // Check if member has already borrowed 3 books
  if (this.borrowedBooks.length >= 3) {
    console.log(`${this.name} cannot borrow more than 3 books.`);
    return;
  }

  // Check if the book is already borrowed
  if (!book.isAvailable) {
    console.log(`"${book.title}" is already borrowed.`);
    return;
  }

  // Mark the book as not available and add it to member's borrowed list
  book.isAvailable = false;
  this.borrowedBooks.push(book.title);
  console.log(`${this.name} borrowed "${book.title}".`);
};
