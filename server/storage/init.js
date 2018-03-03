// const r = require('rethinkdb'),
// HOSTNAME = 'localhost',
// PORT = 28015,
// db = r.db('test'),

// const createAuthors = () => {
// 	m.db('test').tableList().contains('clicks').run(connection, function (err, exists) {
// 		if (!exists) {
// 			db.tableCreate('clicks').run(connection, function (err, result) {
// 				if (err) throw err;
// 				console.log(JSON.stringify(result, null, 2));
// 			})
// 		}
// 	});
// };
// module.exports = {
// 	init: () => {
// 		m.connect({
// 			host: HOSTNAME,
// 			port: PORT
// 		}, function (err, conn) {
// 			if (err) throw err;
// 			connection = conn;
// 			console.log('connected to rethinkdb server');
// 			createAuthors();
// 		});
// 	}
// }

const mongo = require('mongodb'),
	MongoClient = mongo.MongoClient,
	HOSTNAME = 'localhost',
	CONNECTION_URL = 'mongodb://localhost:27017',
	DB = 'mate'; //for mongodb,;

let connection = null;
module.exports = {
	init: () => {
		MongoClient.connect(CONNECTION_URL, function (err, conn) {
			if (err) throw err;
			connection = conn;
			console.log('connected to mongodb server.');
		});
	}
}