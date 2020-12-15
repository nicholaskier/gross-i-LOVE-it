const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  emoji: Boolean
})

const userSchema = new Schema(
  {
    name: String,
    bio: String,
    email: String,
    avatar: String,
    googleId: String,
    movieCollection: [{type: Schema. Types.ObjectId, ref: "Movie"}],
    comments: [commentSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
