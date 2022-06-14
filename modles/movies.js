const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new mongoose.Schema({
    title: { type: String }, 
    genre: { type: String },
    description: { type: String },
    rating: { type: Number },
// }, {
//     timestamps: true 
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;