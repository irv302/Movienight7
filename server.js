const express = require('express');
const moviesController = require('./controllers/movies');
const app = express();


const PORT = 3000

app.use('movies', moviesController);

app.get('/', (req, res) => {
    res.render('index.ejs');
});



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});