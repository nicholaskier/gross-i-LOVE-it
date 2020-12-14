const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: Number,
    title: String,
    posterUrl: String,
    average: Number
})

module.exports = mongoose.model("Movie", movieSchema)