require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const env = process.env;
//const {Users} = require("../models")
passport.serializeUser(function (user, done) {
    //login 처음 성공
    console.log("Serialize User", user);
    return done(null, user); //세션에 저장됨.
});
passport.deserializeUser(function (user, done) {
    //세션에서 유저를 가져온다.
    //user dbd에서 아이디로 가져온다.
    console.log("DeSerialize User", user);
    return done(null, user);
});

googleOpt = {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_PW,
    callbackURL: env.CALLBACK_URL,
    passReqToCallback: true,
};

googleVerify = (req, accessToken, refreshToken, profile, done) => {
    //Users.findOrCreate({ where : {profile.id}});
    const user = {
        username: profile.displayName,
        userphoto: profile.photos[0].value,
        usesrid: profile.id,
    };
    console.log(user);
    return done(null, user); // serializeUser로 이동
};

module.exports = () => {
    passport.use(new GoogleStrategy(googleOpt, googleVerify));
};
