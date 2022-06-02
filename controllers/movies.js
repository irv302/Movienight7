const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('movies/index.ejs');
});

router.get('/new', (req, res) => {
    res.render('movies/new.ejs');
});

module.exports = router;