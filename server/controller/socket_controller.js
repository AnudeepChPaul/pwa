const socket_cluster_server = require('socketcluster-server');

var socket = {},
    sc_connection = null,
    channel = {};

const registerLogin = () => {
    socket.on('login', (data) => {
        socket.setAuthToken({
            username: data.user_id
        });
        console.log(socket)
        sc_connection.exchange.publish(`loggedin${data.user_id}`, {
            ...data
        });
    });
};

const registerLogout = () => {
    socket.on('logout', (data) => {
        socket.deauthenticate(() => {
            sc_connection.exchange.publish(`logout${data.user_id}`, {
                ...data
            });
        });
    });
};

const registerChannel = () => {
    channel['chat'] = sc_connection.exchange.subscribe('chat');
    chat_channel.watch((data) => {
        console.log(data);
        sc_connection.exchange.publish(`post_message${data.to_user_id}`, {
            ...data
        });
    });
};

module.exports.init = (proxy) => {
    sc_connection = socket_cluster_server.attach(proxy);

    sc_connection.on('connection', (_socket) => {
        console.log('socket connected', socket);
        socket = _socket;

        registerLogin();
        registerLogout();

    });
}