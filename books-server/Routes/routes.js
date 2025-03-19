const { Router } = require("express");
const { getBooks, getOneBook, postBook, patchBook, deleteBook } = require("../Controllers/bookController");

const router = Router();

router.get("/", getBooks);

router.get('/:id', getOneBook);

router.post("/", postBook);

router.patch("/", patchBook);

router.delete("/", deleteBook);

module.exports = router;
