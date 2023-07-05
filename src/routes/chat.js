const express = require("express");
const router = express.Router();
const { isAuthenticated } = require('../helpers/auth');
const webhook = require("../api/webhook.js");


router.get("/chat", isAuthenticated, function (req, res) {
  res.render("chat", {
    style: 'chat.css',
    script: 'chat.js',
  });
});

router.post("/webhook", express.json(), (req, res) => webhook(req, res));

module.exports = router;