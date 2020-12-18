const router = require("express").Router()
const moviesCtrl = require("../controllers/movies")

router.get("/", isLoggedIn, moviesCtrl.index)
router.get("/new", isLoggedIn, moviesCtrl.new)
router.get("/movieQuery", isLoggedIn, moviesCtrl.movieQuery)
router.post("/:title/collection", isLoggedIn, moviesCtrl.addToCollection)
router.delete("/:title/collection", isLoggedIn, moviesCtrl.removeFromCollection)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


module.exports = router