const express = require('express');
const routerBooks = require('./Routes/routes');
const routerFavorites = require('./Routes/favoritesRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));

const port = 9090;

app.use('/routes', routerBooks);
app.use('/favorites', routerFavorites);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
