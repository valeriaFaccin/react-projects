const fs = require("fs");

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"));
}

function getBookByID(id) {
    const book = JSON.parse(fs.readFileSync("books.json"));
    return book.filter( b => b.id === id )[0];
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const newBookList = [ ...books, newBook ];
    fs.writeFileSync("books.json", JSON.stringify(newBookList));
}

function updateBook(changes, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"));
    const modifiedIndex = currentBooks.findIndex(book => book.id === id);
    currentBooks[modifiedIndex] = { ...currentBooks[modifiedIndex], ...changes };
    fs.writeFileSync("books.json", JSON.stringify(currentBooks));
}

function deleteBookByID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const filteredBooks = books.filter( book => book.id !== id );
    fs.writeFileSync("books.json", JSON.stringify(filteredBooks));
}

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    updateBook,
    deleteBookByID
}
