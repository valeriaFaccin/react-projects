const express = require('express');
const routerBooks = require('./Routes/routes');

const app = express();
app.use(express.json());

const port = 9090;

app.use('/routes', routerBooks);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
