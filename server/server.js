const PORT = process.env.PORT || 9000,
    storage = require('./storage/init'),
    routes = require('./routes/init'),
    http = require("http"),
    proxy = http.createServer((req, res) => {
        handleRequest(req, res);
    }).listen(PORT, 'localhost', () => {
        console.log('started on ', PORT);
        storage.init();
    });

let flag = false;

const handleRequest = (req, res) => {
    routes.handle_route(req,res);
};