const { Router } = require("express");

const {getFavorites, postFavorite, deleteFavorite} = require("../Controllers/favoriteController");
const router = Router();

router.get('/', getFavorites);

router.post('/:id', postFavorite);

router.delete('/:id', deleteFavorite);

module.exports = router;