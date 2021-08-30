var express = require("express");
var router = express.Router();
const passport = require("passport");
const { authCheck } = require("../middleware/auth");
/* GET home page. */

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/", authCheck, function (req, res, next) {
    console.log("user", req.user);
    res.json({ test: "test" });
});

router.get(
    "/google/callback",
    passport.authenticate("google"),
    function sucsess(req, res, next) {
        console.log("req.user", req.user);
        res.status(200).json({ msg: "hi" });
    }
);

router.get(
    "/login/success",
    passport.authenticate("google", { scope: ["profile"] }),
    function sucsess(req, res, next) {
        console.log("req.user", req.user);
        res.status(200).json({ msg: "hi" });
    }
);

router.get("/login/success", passport.authenticate("google"));
router.get("/login/failed");
router.get("/login/logout");
module.exports = router;
