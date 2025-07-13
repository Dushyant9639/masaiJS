// PremiumMember.js

import { Member } from './Member.js';

// Constructor function for PremiumMember
// Inherits from Member and adds specialCollectionAccess
export function PremiumMember(name) {
  // Call Member constructor to initialize common properties
  Member.call(this, name);
  this.specialCollectionAccess = true; // Premium-specific property
}

// Set up prototype inheritance from Member
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook method to allow up to 5 books for premium members
PremiumMember.prototype.borrowBook = function(book) {
  // Allow up to 5 books for premium members
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} cannot borrow more than 5 books.`);
    return;
  }

  // Use Member's borrowBook method to reuse borrowing logic
  Member.prototype.borrowBook.call(this, book);
};
