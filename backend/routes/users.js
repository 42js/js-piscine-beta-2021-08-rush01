var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});
//router.get("/signin", passport.authenticate("google", { scope: ["profile"] }));

module.exports = router;
