const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    poster_path: String,
    vote_average: Number,
    overview: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

module.exports = mongoose.model("Movie", movieSchema)