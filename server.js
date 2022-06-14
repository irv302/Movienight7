require('dotenv').config();
const express = require('express');
const app = express();
const moviesController = require('./controllers/movies');
const mongoose = require('mongoose');
const methodOverried = require('method-override');
const PORT = 3000
const Movie = require("./modles/movies")

mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,

});

db = mongoose.connection

db.on('error', (err) => console.log(`${err.message} mongo is not connected `));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



app.use(methodOverried('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/movies', moviesController);

//index
app.get('/', (req, res) => {
    res.render('index.ejs');
});
//new
app.get("/movies/new", (req, res) => {
    res.render("new.ejs");
});
//create
app.post("/movies", (req, res) => {
Movie.create(req.body,
    (error, createdMovie) =>{
        console.log(req.body,"open")
        res.redirect("/movies");
    });
});
//show
app.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        res.render("show.ejs", {
            movie: foundMovie,
        });
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});