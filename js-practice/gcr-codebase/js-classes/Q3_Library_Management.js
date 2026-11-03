class Book {
  constructor(heading, writer, isbnCode, lentOut = false) {
    this.title = heading;
    this.author = writer;
    this.ISBN = isbnCode;
    this.isIssued = lentOut;
  }
  issueBook() {
    if (this.isIssued) {
      return `${this.title} is already issued.`;
    }
    this.isIssued = true;
    return `${this.title} has been issued successfully.`;
  }
  returnBook() {
    if (!this.isIssued) {
      return `${this.title} was not issued.`;
    }
    this.isIssued = false;
    return `${this.title} has been returned successfully.`;
  }
}
const volumes = [
  new Book('The Alchemist', 'Paulo Coelho', 'ISBN101'),
  new Book('Wings of Fire', 'A. P. J. Abdul Kalam', 'ISBN102'),
  new Book('1984', 'George Orwell', 'ISBN103', true),
];
function displayAvailableBooks() {
  const inStock = volumes.filter((volume) => !volume.isIssued);
  console.log('Available books:');
  inStock.forEach((book) => console.log(`${book.title} by ${book.author} (${book.ISBN})`));
}
function issueBookByISBN(isbnValue) {
  const book = volumes.find(
    (entry) => entry.ISBN.toLowerCase() === isbnValue.toLowerCase(),
  );
  if (!book) {
    console.log('No book found with that ISBN.');
    return;
  }
  console.log(book.issueBook());
}
displayAvailableBooks();
issueBookByISBN('ISBN101');
displayAvailableBooks();
