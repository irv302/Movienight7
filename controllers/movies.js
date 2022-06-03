
const express = require('express');
const router = express.Router();
const Movies = require('../modles/movies');

router.get('/', (req, res) => {
    Movies.find({}, (err, foundMovies) => {
        res.render('movies/index.ejs', {
            movies: foundMovies
        });
    });
});

router.post('/', (req, res) => {
    Movies.create(req.body, (err, createdMovies) => {
        res.redirect('/movies');
    });
});

router.get('/', (req,res) => {
    res.render('movies/index.ejs');
});

router.get('/new', (req, res) => {
    res.render('movies/new.ejs');
});


router.get('/:id', (req, res) => {
    Movies.findById(req.params.id, (err, foundMovies) => {
        res.render('/movies/show.ejs', {
            movies: foundMovies
        });
    });
});

module.exports = router;