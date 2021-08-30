require('dotenv').config({path:'./config/.env'});

const development = {
  "username": process.env.MYSQL_USER,
  "password": process.env.MYSQL_PASS,
  "database": process.env.MYSQL_NAME,
  "host": process.env.MYSQL_HOST,
  "dialect": process.env.MYSQL_DIALET
}

module.exports = {development};