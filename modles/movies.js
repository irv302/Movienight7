const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    rating: Number,
    genre: String,
}, {
    timestamps: true 
});

const Movies = mongoose.model('movies', moviesSchema);

module.exports = Movies;