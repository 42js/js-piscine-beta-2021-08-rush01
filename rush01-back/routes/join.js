var express = require('express');
var router = express.Router();
var { sequelize, Users } = require('../models');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var passport = require('../passportset');
const multer = require('multer');
router.use(passport.initialize());
router.use(passport.session());
const storage = multer.diskStorage({
    destination: "./public/img/",
    filename: function(req, file, cb) {
      cb(null, "imgfile" + Date.now());
    }
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  });
router.get('/',
  ensureLoggedIn('/api/login/42'),
  function (req, res) {
    Users.findAll({ where: { username: req.user.username }}).then((results) => {
          res.json(results)
    }).catch((err) => { console.log('' + err); });
    //res.render('index', {name : req.user.username});
  });
router.post('/',
  ensureLoggedIn('/api/login/42'),upload.single("file"),
  function (req, res) {
      console.log(req.file.profile)
    Users.update({nickname:req.body.nickname,photo:req.body.photo},{ where: { username: req.user.username } }).then((results) => {
          res.redirect('/')
    }).catch((err) => { console.log('' + err); });
    //res.render('index', {name : req.user.username});
  });

module.exports = router;