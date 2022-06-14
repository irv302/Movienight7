require('dotenv').config();
const express = require('express');
// const res = require("express/lib/response")
const app = express();
const moviesController = require('./controllers/movies');
const mongoose = require('mongoose');
const methodOverried = require('method-override');
const PORT = 3000
const Movie = require("./modles/movies");
const res = require('express/lib/response');

mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection

db.on('error', (err) => console.log(`${err.message} mongo is not connected `));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



app.use(methodOverried('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/movies', moviesController);
// app.use(express.static("public"));

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
        res.render("/movies/show.ejs", {
            movie: foundMovie,
        });
    });
});
//Edit
app.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        res.render("/movies/edit.ejs", {
            movie: foundMovie,
        });
    });
});

//Delete
app.delete("/movies/:id", (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/movies");
    });
});

app.put("/movies/:id", (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedMovie) => {
            res.redirect(`${req.params.id}`);
        }
        );
    });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});