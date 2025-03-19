const { getAllBooks, getBookByID, insertBook, updateBook, deleteBookByID } = require('../Service/bookServices');

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.status(200).send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getOneBook(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const book = getBookByID(id);
            res.status(200).send(book);
        } else {
            res.status(422).send("Book ID not found");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body;
        if(req.body.name) {
            insertBook(newBook);
            res.status(201).send("Book inserted successfully.");
        } else {
            res.status(422).send("The book must have a name.");
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function patchBook(req, res) {
    try {
        if(req.params.id && Number(req.params.id)) {
            updateBook(req.params.id, req.body);
            res.status(200).send("Book updated successfully.");
        } else {
            res.status(422).send("Book ID not found");
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function deleteBook(req, res) {
    try {
        if(req.params.id && Number(req.params.id)) {
            deleteBookByID(req.params.id);
            res.status(200).send("Book deleted successfully.");
        } else {
            res.status(422).send("Book ID not found");
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

module.exports = {
    getBooks,
    getOneBook,
    postBook,
    patchBook,
    deleteBook
}
