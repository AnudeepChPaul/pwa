const r = require('rethinkdb'),
    HOSTNAME = 'localhost',
    PORT = 28015,
    db = r.db('test'),

    createAuthors = () => {
        r.db('test').tableList().contains('clicks').run(connection, function (err, exists) {
            if (!exists) {
                db.tableCreate('clicks').run(connection, function (err, result) {
                    if (err) throw err;
                    console.log(JSON.stringify(result, null, 2));
                })
            }
        });
    };

let connection = null;
module.exports = {
    init: ()  => {
        r.connect({
            host: HOSTNAME,
            port: PORT

        }, function (err, conn) {
            if (err) throw err;
            connection = conn;
            console.log('connected to rethinkdb server');
            createAuthors();
        });
    }
}
