const User = require('../models/User');

async function create(req, res) {
  const { fullname, email, username, password } = req.body;
  const errors = [];
  if (await User.findOne({ email: email})) {
    errors.push({ text: "The email is already in use." });
  }
  if (await User.findOne({ username: username})) {
    errors.push({ text: "This username is already taken." });
  }
  if (password.length < 8) {
    errors.push({ text: "Password must be at least 8 characters." });
  }
  if (errors.length > 0) {
    res.render("login.hbs", {
      style: "login.css",
      script: 'login.js',
      errors, fullname, email, username, password
    });
  } else {
    const newUser = new User({ fullname, email, username, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
  }
}

module.exports = { create };