var express = require('express');
var router = express.Router();
var { sequelize, Users } = require('../models');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var passport = require('../passportset');

router.use(passport.initialize());
router.use(passport.session());
router.get('/',
  ensureLoggedIn('/api/login/42'),
  function (req, res) {
    Users.findAll({ where: { username: req.user.username }}).then((results) => {
          res.json(results)
    }).catch((err) => { console.log('' + err); });
    //res.render('index', {name : req.user.username});
  });
router.post('/',
  ensureLoggedIn('/api/login/42'),
  function (req, res) {
    Users.update({nickname:req.body.nickname,photo:req.body.photo},{ where: { username: req.user.username } }).then((results) => {
          res.redirect('/')
    }).catch((err) => { console.log('' + err); });
    //res.render('index', {name : req.user.username});
  });

module.exports = router;