const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql');
const router = express.Router();

const app = express();



sequelize.authenticate().then((res)=>{console.log("connected");} ).catch((err)=>{
    console.error(err);
})

const driver = () => {
    sequelize.sync().then(() => {
        console.log('초기화 완료.');
    }).catch((err) => {
        console.error('초기화 실패');
        console.error(err);
    });
};