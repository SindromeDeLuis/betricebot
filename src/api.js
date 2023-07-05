// server.js
// where your node app starts

// init project
const express = require("express");
const handlebars = require("express-handlebars");
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const serverless = require("serverless-http");

// initializations
const app = express();
require('./config/database');
require('./config/passport');

// Settings
app.set("views", __dirname + "/views");
app.engine('.hbs', handlebars.engine({
  defaultLayaut: 'main',
  layautsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials",
  extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'secretApp',
  resave: true,
  saveUninitialized: true,
  cookie:{_expires : 3600000}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use(`/.netlify/functions/api`, require('./routes/index'));
app.use(`/.netlify/functions/api`, require('./routes/user'));
app.use(`/.netlify/functions/api`, require('./routes/chat'));

// Static files
app.use(express.static("public"));

// Page not found
app.use((req, res) => {
  res.status(404);
  res.render("404", {
    style: '404.css'
  });
});

// Server is listening
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);