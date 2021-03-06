const axios = require("axios")
const Movie = require("../models/movie")


module.exports = {
    index,
    new: newMovie,
    addToCollection,
    removeFromCollection,
    movieQuery,
}

function index(req, res) {
    Movie.find({ favoritedBy: req.user._id})
    .then((movies) => {
        res.render("movies/index", {
            user: req.user,
            movies
        })
    })
}

function newMovie(req, res) {
    res.render("movies/new", {user: req.user, movie1: null, movie2: null})
}

function addToCollection(req, res) {
   Movie.findOne({ title: req.body.title})
   .then((movie) => {
       if (movie) {
          movie.favoritedBy.push(req.user._id)
           movie.save()
           .then(() => {
               res.redirect("/movies/new")
            })
        } else {
            req.body.favoritedBy = req.user._id
            Movie.create(req.body)
            .then(() => {
                const x = Math.floor(Math.random() * 200) + 1
                const y = Math.floor(Math.random() * 19) + 1
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&region=US&sort_by=vote_count.asc&include_adult=false&include_video=false&page=1&vote_count.gte=25&vote_average.lte=5.5&with_runtime.gte=60&with_original_language=en&page=${x}`)
                .then((response) => {
                // console.log(response.data.results[y])
                    res.render("movies/new", {user: req.user, movie1 : response.data.results[y], movie2: response.data.results[y + 1]})
                    
                })
            })
        }
     })
}

function removeFromCollection(req, res) {
    Movie.findOne( {title: req.params.title })
    .then((movie) => {
        let idx = movie.favoritedBy.indexOf(req.user._id)
        movie.favoritedBy.splice(idx, 1)
        movie.save()
        .then(() => {
            res.redirect("/movies")
        })
    })
}

function movieQuery(req, res) {
    const x = Math.floor(Math.random() * 200) + 1
    const y = Math.floor(Math.random() * 19) + 1
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&region=US&sort_by=vote_count.asc&include_adult=false&include_video=false&page=1&vote_count.gte=25&vote_average.lte=5.5&with_runtime.gte=60&with_original_language=en&page=${x}`)
    .then((response) => {
        console.log(response.data.results, y)
        // console.log(response.data.results)
        if (response.data.results[y] != null && response.data.results[y +1] != null) {
            res.render("movies/new", {user: req.user, movie1 : response.data.results[y], movie2: response.data.results[y + 1]})
            // console.log(response.data.results[y].overview.length)
        } else {
            movieQuery(req, res)
        }
    })
}
