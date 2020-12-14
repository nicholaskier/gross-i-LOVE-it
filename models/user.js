const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    movieCollection: [{type: Schema. Types.ObjectId, ref: "Movie"}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
