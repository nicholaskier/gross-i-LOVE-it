const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    gross: Boolean,
    love: Boolean,
  })

const movieSchema = new Schema({
    title: String,
    poster_path: String,
    vote_average: Number,
    overview: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [commentSchema],
})

module.exports = mongoose.model("Movie", movieSchema)