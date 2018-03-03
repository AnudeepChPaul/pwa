const server_routes = require('../../routes/server_routes');

const login = () => {
	// console.log('login')
};

const logout = () => {
	// console.log('logout);
};

module.exports = {
	init() {
		server_routes.register_route('/authenticate', 'get', function (req, res) {
			res.end(JSON.stringify({
				success: true,
				data: {
					user_id: 'NewUser'
				}
			}))
			// res.end(JSON.stringify({
			// 	error: true,
			// 	msg: 'user_not_exists'
			// }))
		});
	}
}