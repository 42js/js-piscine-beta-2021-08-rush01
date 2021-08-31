require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var fileStore = require('session-file-store')(session);
var passport = require('./passportset');
const cors = require('cors');
//var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const {sequelize, Users} = require('./models/');

const loginRouter = require('./routes/login');
const joinRouter = require('./routes/join');
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
var app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
//sequelize.authenticate().then((results) => {
sequelize.sync().then((results) => {
  console.log("done");
}).catch((err) => {
  console.log(err);
});

// view engine setup
// console.log(Users);
// Users.findOne({ where: { username: "gilee" } }).then((results) => {
//   console.log('🤬', results);
// }).catch((err) => { console.log('' + err); });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ resave: false, saveUninitialized: false, secret: process.env.SESSION_SECRET , store: new fileStore()}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(passport.initialize());
//app.use(passport.session());
app.get('/api', (req, res) => {
	res.json('hello');
});
app.use('/api/login', loginRouter);
app.use('/api/join', joinRouter);
/*
app.get('/login',
  ensureLoggedIn('/login/42'),
  function (req, res) {
    console.log(req.user,'loggedin');
    res.render('index', {name : req.user});
  });

app.get('/login/42',
  passport.authenticate('42'));

app.get('/login/42/return',
  passport.authenticate('42', { failureRedirect: '/login/42' }),
  function (req, res) {
    res.redirect('/')
  });
*/
app.get('/api/logout', function (req, res) {
    req.logOut();
    req.session.save(function(){
	   res.redirect('/api/login');
	})
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.stack);
});

module.exports = app;
