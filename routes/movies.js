const router = require("express").Router()
const moviesCtrl = require("../controllers/movies")

router.get("/new", isLoggedIn, moviesCtrl.new)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


module.exports = router