const Movie = require("../models/movie")

module.exports = {
    create
}

function create(req, res) {
    Movie.findById(req.params.id)
    .then((movie) => {
        movie.reviews.push(req.body)
        movie.save()
        .then(() => {
            res.redirect(`/users/${req.params.userInfoId}`)
        })
    })
}