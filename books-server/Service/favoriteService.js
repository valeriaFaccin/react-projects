const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"));
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favorites = JSON.parse(fs.readFileSync("favorites.json"));

    const filteredBook = books.filter( book => book.id === id );
    const newFavoritesList = [ ...favorites, filteredBook ];

    fs.writeFileSync("favorites.json", JSON.stringify(newFavoritesList));
}

function deleteFavoriteByID(id) {
    const favorites = JSON.parse(fs.readFileSync("favorites.json"));
    const filteredFavorites = favorites.filter( fav => fav.id !== id );

    fs.writeFileSync("books.json", JSON.stringify(filteredFavorites));
}

module.exports = {
    getAllFavorites,
    insertFavorite,
    deleteFavoriteByID
}
