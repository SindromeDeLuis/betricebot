const express = require("express");
const router = express.Router();
const { create } = require('../controllers/user');
const passport = require('passport');
const { notAuthenticated } = require('../helpers/auth');

router.get("/login", notAuthenticated, function (req, res) {
  res.render("login.hbs", {
    style: 'login.css',
    script: 'login.js'
  });
});

router.post("/login", passport.authenticate('local', {
  successRedirect: '/chat',
  failureRedirect: '/login',
  failureflash: true,
}));

router.post("/signup", function (req, res) {
    create(req, res);
    res.redirect("/login");
});

router.post("/logout", function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err) }
    res.redirect('/');
  });
});

module.exports = router;
