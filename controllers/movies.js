const Movie = require("../models/movie")

module.exports = {
    index,
    new: newMovie,
    addToCollection,
    removeFromCollection
}

function index(req, res) {

}

function newMovie(req, res) {
    res.render("movies/new", {user: req.user})
}

function addToCollection(req, res) {

}

function removeFromCollection(req, res) {
    
}

// https://api.themoviedb.org/3/discover/movie?api_key=128f779ecf9c9c11602257711da1a19f&language=en-US&region=US&sort_by=vote_count.asc&include_adult=false&include_video=false&page=1&vote_count.gte=10&vote_average.lte=5.5&with_runtime.gte=60&with_original_language=en

// correct URL for API call 
// 110 pages
// 2195 results