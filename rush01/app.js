const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require("./passport"); // 패스포트 만든것들을 사용할 수 있음

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const socketRouter = require('./routes/socket');
const app = express();
passportConfig();
app.set('views', __dirname + '/views'); // __dirname -> 디렉토리 루트 
app.set('view engine', 'ejs'); //뷰엔진을 ejs로 한다 

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
      httpOnly: true,
      secure: false
  }
}))

// passport.initialize() -> 요청(req)객체에 passport 설정합니다.
app.use(passport.initialize());
app.use(passport.session());

// passport.session 미들웨어는 req.session 객체 passport 정보를 저장합니다.
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/socket', socketRouter);

module.exports = app;
