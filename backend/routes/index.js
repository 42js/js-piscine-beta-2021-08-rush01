var express = require("express");
var router = express.Router();
const passport = require("passport");
const { authCheck } = require("../middleware/auth");
/* GET home page. */

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/", authCheck, function (req, res, next) {
    console.log("user", req.user);
    res.json({ test: req.user });
});

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000/",
        failureRedirect: "login/faild",
    })
);

router.get("/login/success", authCheck, function (req, res, next) {
    res.send("thx");
});

router.get("/login/faild", function (req, res, err) {
    res.json({ msg: "TT" });
});
router.get("/login/logout");
module.exports = router;
