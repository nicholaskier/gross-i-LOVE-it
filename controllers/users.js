const User = require("../models/user")
const Movie = require("../models/user")

module.exports = {
    index,
    showProfile
}

function index(req, res) {
    User.find({}).then((users) => {
        res.render("users/index", {user: req.user, users})
    })
}

function showProfile(req, res) {
    User.findById(req.user._id)
    .then((user) => {
        res.render("users/profile", {user: req.user})
    })
}