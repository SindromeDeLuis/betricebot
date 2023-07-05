const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    style: 'index.css',
  });
});

router.get("/guide", (req, res) => {
  res.render("guide", {
    style: 'guide.css',
  });
});

module.exports = router;