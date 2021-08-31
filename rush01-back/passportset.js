require('dotenv').config()
var passport = require('passport');
var strategy = require('passport-42').Strategy;

passport.use(new strategy({
  clientID: process.env.FORTYTWO_CLIENT_ID,
  clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
  callbackURL: process.env.CALL_BACK_URL,
},
  function (accessToken, refreshToken, profile, cb) {
    console.log({ username: profile['username'], email: profile['emails'][0].value});
    return cb(null, { username: profile['username'], email: profile.emails[0].value});
  }));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport
