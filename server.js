require('dotenv').config();
const express = require('express');
const app = express();
const moviesController = require('./controllers/movies');
const mongoose = require('mongoose');
const methodOverried = require('method-override');
const PORT = 3000

mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParaser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message} mongo is not connected `));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(methodOverried('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/movies', moviesController);


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});