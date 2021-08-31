const express = require('express');
const router  = express.Router();
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const { user } = require('../models');
const { room } = require('../models');

// router.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const rooms = {hi: "hello"};

io.on('connection', (socket) => {

	socket.on('load rooms', () => {
		io.to(socket.id).emit('load rooms', rooms);
	})

	socket.on('create room', info => {
		const code = 1234; // 랜덤 구현
		rooms.code = {
			room_code:code,
			game :{
				head_count:1,
				game_cheap:info.game.game_cheap,
				game_time:info.game.game_time,
			},
			creator:info.user.id,
			player2:null,
		}
		socket.join(code);
		io.to(socket.id).emit('create room', rooms.code);
		io.emit('update room state', {
			state:'create',
			room_info:rooms.code,
			room_code:code,
		});
	})

	socket.on('join room', async(info) => {
		const code = info.room_code;
		const cur_room = rooms.code;
		const opp_id = cur_room.creator;
		cur_room.player2 = info.user.id;
		cur_room.game.head_count++;

		const opponent = await user.findOne({where:{id:opp_id}});
		io.to(code).emit('opponent enter', info.user);
		socket.join(code);
		io.to(socket.id).emit('join room', opponent);
		io.emit('update room state', {
			state:'update',
			room_info:rooms.code,
			room_code:code,
		});
	})

	socket.on('leave room', (info)=> {
		const code = info.room_code;
		const cur_room = rooms.code;
		const result = {};
		if (cur_room.game.head_count == 1){
			delete rooms.code;
			result.state = 'delete';
			result.room_code = code;
		}
		else {
			if (info.user.id == cur_room.creator){
				cur_room.creator = cur_room.player2;
			}
			cur_room.player2 = null;
			cur_room.game.head_count--;
	
			socket.leave(code);
			io.to(code).emit('opponent leave', info.user);
			result.state = 'update';
			result.room_code = code;
			result.room_info = cur_room;
		}
		io.emit('update room state', result);
		io.to(socket.id).emit('leave room', true);
	})

	// socket.on('login', async function(user_id){
	// 	// const info = await user.findOne({where:{user_id}});
	// 	// if (info) {
	// 	// 	socket.user_id = user_id;
	// 	// 	socket.intra_id = info.intra_id;
	// 	// 	socket.nick_name = info.nick_name;
	// 	// 	socket.win = info.win;
	// 	// 	socket.defeat = info.defeat;
	// 	// }
	// 	// io.to(socket.id).emit('login', true);
	// })

	// socket.on('join room', async function(room_code){
	// 	const info = await user.findOne({where:{room_code:room_code}});
	// 	if (info) {
	// 		socket.room_code = room_code;
	// 		socket.game_time = info.intra_id;
	// 		socket.nick_name = info.nick_name;
	// 		socket.win = info.win;
	// 		socket.defeat = info.defeat;
	// 	}
	// 	//데이터 베이스에서 유저 정보 가져와서 상대에게 'opponent enter' emit
	
	// 	//데이터 베이스에서 방 정보 가져와서
	// 	const room;
	// 	const res = {
	// 		game_time : room.game_time,
	// 		game_chip : room.game_chip,
	// 		result : true,
	// 	}
	// 	io.emit('join room', res);
	// });

	// socket.on('create room', room_info => {
	// 	const host_id = room_info.host_id;
	// 	//데이터 베이스에 룸 추가
	// 	socket.join(room_id);
		
	// 	io.emit('update room state', object);
		
	// 	const res = {
	// 		room_id : room_id,
	// 		result : true,
	// 	}
	// 	io.emit('create room', res);
	// });

	// socket.on('leave room', leave_info => {
	// 	socket.leave(leave_info.room_id, ()=> {
	// 		io.emit('leave room')
	// 	});
	// })



});

module.exports = router;

// server.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`);
// });
