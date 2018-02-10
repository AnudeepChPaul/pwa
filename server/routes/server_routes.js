var routes = [];


class Route {
    constructor(url, type, handler) {
        this.name = url;
        this.type = type.toUpperCase();
        this.handler = handler || function () {
            console.warn('empty handler');
        };
    }

    exec(...rest) {
        this.handler(...rest);
    }
};

module.exports = {
    get_routes() {
        return routes.concat();
    },

    register_route(url, type, handler) {
        routes.push(new Route(url, type, handler))
    }
}
