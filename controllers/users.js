const User = require("../models/user")
const Movie = require("../models/movie")
const ObjectId = require("mongoose").Types.ObjectId

module.exports = {
    index,
    showProfile,
    show,
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

function show(req, res) {
    User.findById(req.params.id)
    .then((userInfo) => {
        Movie.find({ favoritedBy: userInfo._id })
        .then((movies) => {
            res.render("users/show", {
                userInfo,
                user: req.user,
                movies,
            })
        })
    })
}