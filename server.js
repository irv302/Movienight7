require('dotenv').config();
const express = require('express');
const moviesController = require('./controllers/movies');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParaser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' No mangos ?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use('/movies', require('./controllers/movies'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});