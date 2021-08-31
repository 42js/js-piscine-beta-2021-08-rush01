var express = require('express');
var router = express.Router();
var { sequelize, Users } = require('../models');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const createHttpError = require('http-errors');
var passport = require('../passportset');

router.use(passport.initialize());
router.use(passport.session());
router.get('/',
  ensureLoggedIn('/api/login/42'),
  function (req, res) {
    Users.findOne({ where: { username: req.user.username } }).then((results) => {
        if (results === null) {
          Users.create({
            username: req.user.username,
            email: req.user.email
          })
          res.redirect('/join');
        } else
          res.redirect('/')
    }).catch((err) => { console.log('' + err); });
    console.log(req.user.username,'loggedin');
    //res.render('index', {name : req.user.username});
  });

router.get('/42',
  passport.authenticate('42'));

router.get('/42/return',
  passport.authenticate('42', { failureRedirect: '/api/login/42' }),
  function (req, res) {
    res.redirect('/api/login')
  });
  
/*  
router.get('/', function (req, res, next) {
  Users.findOne({
    where: {
      username: req.body.username
    }
  }).then((results) => {
    if (results.password == pw) {
      console.log('🤮', 'loggedIN');
      const token = gentoken(req.body.username)
      res.append(
        "Set-Cookie", `jwt=${token} Expires=${new Date(Date.now() + 1000*60*60).toISOString()};`
      );
      res.json({
        msg: "done"
      });
    } else
      res.status(500).json({
        msg: "fail"
      });
  })
});
*/
module.exports = router;
