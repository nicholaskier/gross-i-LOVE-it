const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
    {
      reviewer: String,
      reviewerPhoto: String,
      rating: { type: String, enum: ["Gross.", "I Love it!"] }
    },
    {
      timestamps: true,
    }
  );

const movieSchema = new Schema({
    title: String,
    poster_path: String,
    vote_average: Number,
    overview: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reviews: [reviewSchema],
}, {
  timestamps: true,
})

module.exports = mongoose.model("Movie", movieSchema)