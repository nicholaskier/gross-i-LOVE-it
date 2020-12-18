const router = require("express").Router()
const commentCtrl = require("../controllers/comments")

router.post("/movies/:id/comments", isLoggedIn, commentCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
  


module.exports = router