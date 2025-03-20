const { Router } = require("express");
const { getBooks, getOneBook, postBook, patchBook, deleteBook } = require("../Controllers/bookController");

const router = Router();

router.get("/", getBooks);

router.get('/:id', getOneBook);

router.post("/:id", postBook);

router.patch("/:id", patchBook);

router.delete("/:id", deleteBook);

module.exports = router;
