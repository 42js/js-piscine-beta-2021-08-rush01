const { OAuth2Client } = require('google-auth-library');
const db = require('./models');
require('dotenv').config();
const client = new OAuth2Client(process.env.CLIENT_ID);
const models = require('./models');

const GoogleLogin = async (req, res) => {
  const { token } = req.body;
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.CLIENT_ID
	});
	const { name, email, picture } = ticket.getPayload();
	const user = await db.user.upsert({
		where: { email: email },
		update: { name, picture },
		create: { name, email, picture }
	});
	req.session.userId = user.id;
	req.status(201);
	res.json(user);
}

// app.use(async (req, res, next) => {
// 	const user = await db.user.findFirst({where: { id : req.session.userId }})
// 	req.user = user;
// 	next()
// })

// app.delete("", async (req, res) => {
// 	await req.session.destory()
// 	res.status(200)
// 	res.json({
// 		message: "Logged out successfully"
// 	})
// })

 module.exports = { GoogleLogin };