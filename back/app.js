const express = require('express');
const { sequelize } = require('./models/index');
require('dotenv').config();
const router = express.Router();
const authService = require("./auth.js");

const app = express();
app.use(express.json());

router.post(process.env.ENDPOINT_AUTH, (req, res) => {
	authService.GoogleLogin(req, res);
})

sequelize.authenticate()
.then((res) => {
	console.log("connected");
})
.catch((err) => {
	console.error(err);
})

const driver = () => {
	sequelize.sync().then(() => {
		console.log('초기화 완료.');
	}).catch((err) => {
		console.error('초기화 실패!');
		console.error(err);
	});
};

app.listen(4242, () => {
	driver();
});