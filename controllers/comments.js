const Movie = require("../models/movie")

module.exports = {
    create
}

function create(req, res) {
    Movie.findById(req.params.id)
    .then((movie) => {
        movie.comments.push(req.body)
        movie.save()
        .then(() => {
            res.redirect("/users")
        })
    })
}