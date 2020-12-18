const User = require("../models/user")
const Movie = require("../models/movie")
const ObjectId = require("mongoose").Types.ObjectId

module.exports = {
    index,
    showProfile,
    show,
    addFriend,
    removeFriend
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

function addFriend(req, res) {
    req.user.friends.push(req.params.id)
    req.user.save()
    .then(() => {
      res.redirect(`/users/${req.params.id}`)
    })
  }
  

function removeFriend(req, res) {
    let idx = req.user.friends.indexOf(req.params.id)
    req.user.friends.splice(idx, 1)
    req.user.save()
    .then(() => {
      res.redirect(`/users/${req.params.id}`)
    })
}