require("dotenv").config();
const session = require("express-session");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
const passportConfig = require("./passport");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const cors = require("cors");

app.use(
    session({
        secret: process.env.COOKIE_KEY,
        cookie: { maxAge: 60 * 60 * 1000 },
        resave: true,
        saveUninitialized: false,
    })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
