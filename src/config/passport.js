const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../models/User");

passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, req.flash('error', 'User not found.'));
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, req.flash('error', "Incorrect password."));
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    if (!user) throw new Error("User not found.");
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, null);
  }
});
