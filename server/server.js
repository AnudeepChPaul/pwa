const PORT = process.env.PORT || 9000,
    http = require("http"),
    storage = require('./storage/init'),
    routes = require('./routes/init'),
    // importing socket controller for handling socket
    socket_controller = require('./controller/socket_controller');

const proxy = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://beta.pwa.in');
    handleRequest(req, res);
});

socket_controller.init(proxy);

proxy.listen(PORT, 'localhost', () => {
	console.log('started on ', PORT);
	process.nextTick(storage.init);
});

const handleRequest = (req, res) => {
    routes.handleRoute(req, res);
};