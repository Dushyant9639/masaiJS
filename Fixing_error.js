const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    if (
      typeof book.title !== "string" || book.title.trim() === "" ||
      typeof book.author !== "string" || book.author.trim() === "" ||
      typeof book.year !== "number" || isNaN(book.year)
    ) {
      console.error("Book information is incomplete or invalid.");
      return;
    }
    const exists = this.books.some(b => b.title === book.title);
    if (exists) {
      console.warn(`Book titled "${book.title}" already exists in the library.`);
      return;
    }

    this.books.push(book);
    console.log(`Book titled "${book.title}" added successfully.`);
  },

  findBookByTitle(title) {
    if (typeof title !== "string" || title.trim() === "") {
      console.error("Title must be a non-empty string.");
      return null;
    }

    return this.books.find(book => book.title === title) || null;
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`Book titled "${removed[0].title}" removed.`);
    } else {
      console.warn("Book not found.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 }); 
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Total books:", library.books.length);

const found = library.findBookByTitle("1984");
console.log("Found Book:", found);

library.removeBook("The Hobbit"); 
library.removeBook("Unknown Book"); 

console.log("Final Book List:", library.books);
