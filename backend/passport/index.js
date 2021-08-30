require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const env = process.env;
//const {Users} = require("../models")
googleOpt = {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_PW,
    callbackURL: env.RETURN_URL,
    passReqToCallback: true,
};

googleVerify = (req, accessToken, refreshToken, profile) => {
    console.log(accessToken);
    console.log(profile.displayName);
    //Users.findOrCreate({ where : {profile.id}});
};

module.exports = () => {
    passport.use(new GoogleStrategy(googleOpt, googleVerify));
};
