// Constructor function for Book
// Parameters: title (string), author (string), isAvailable (boolean, defaults to true)
export function Book(title, author, isAvailable = true) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
}
