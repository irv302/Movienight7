const express = require('express');
const app = express();
const moviesController = require('./controllers/movies');



app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('listening ')
});