var server_routes = require('./server_routes');

const handle_route = (req, res) => {
    var filtered_routes = server_routes.get_routes().filter(function (route) {
        return route.name === req.url && req.method === route.type
    });

    if (filtered_routes.length > 0) {
        filtered_routes.forEach(function (route) {
            route.exec(req, res);
        });
    } else {
        res.end(JSON.stringify({
            error: true,
            msg: 'route not defined',
            requestType: req.method
        }));
    }
}

server_routes.register_route('/', 'get', function (req, res) {
    console.log(req, res);
    res.end(JSON.stringify({
        success: true,
        data: {
            msg: 'You\'re in the route'
        }
    }))
});

module.exports = {
    handle_route
};
