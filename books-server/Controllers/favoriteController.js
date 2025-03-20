const {getAllFavorites, insertFavorite, deleteFavoriteByID} = require("../Service/favoriteService");

function getFavorites(req, res) {
    try {
        const fav = getAllFavorites();
        res.status(200).send(fav);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavorite(req, res) {
    try {
        const newFavorite = req.body;
        insertFavorite(newFavorite);
        res.status(201).send("Book inserted successfully.");
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function deleteFavorite(req, res) {
    try {
        if(req.params.id && Number(req.params.id)) {
            deleteFavoriteByID(req.params.id);
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
    getFavorites,
    postFavorite,
    deleteFavorite
}
