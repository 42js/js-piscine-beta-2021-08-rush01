const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql');

const app = express();