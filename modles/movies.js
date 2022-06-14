const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: { type: String }, 
    genre: { type: String },
    rating: { type: Number },
// }, {
//     timestamps: true 
});

const Movies = mongoose.model('movies', moviesSchema);

module.exports = Movies;