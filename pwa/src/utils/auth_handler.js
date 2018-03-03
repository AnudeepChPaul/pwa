import Vue from 'vue';
import socketCluster from 'socketcluster-client';

var app = {
    $socket: null,
    $eventBus: new Vue()
};

function registerAuthStateEventEmitter() {
    app.$socket.on('authStateChange', (authData) => {
        app.$eventBus.$emit('loginstatus', {
            status: authData.newState === 'authenticated',
            token: authData.signedAuthToken
        });
    });
}

function registerSocketConnection() {
    app.$socket = socketCluster.connect({
        hostname: 'serv.pwa.in',
        path: '/socketcluster/',
        connectTimeout: 10000, // milliseconds
        ackTimeout: 10000, // milliseconds
        channelPrefix: null,
        disconnectOnUnload: true,
        multiplex: true,
        autoConnect: true,
        secure: false,
        rejectUnauthorized: false,
        autoReconnectOptions: {
            initialDelay: 10000, // milliseconds
            randomness: 10000, // milliseconds
            multiplier: 1.5, // decimal
            maxDelay: 60000 // milliseconds
        },
        authEngine: null,
        codecEngine: null,
        subscriptionRetryOptions: {}
    });

    app.$socket.on('connect', () => {
        console.log('connected');
    });

    app.$socket.on('disconnect', () => {
        console.log('disconnected');
    });
}

export function init() {
    registerSocketConnection();
    registerAuthStateEventEmitter();
}

export function subscribe(...params) {
    return app.$eventBus.$on(...params);
}

export function getLoginStatus() {
    console.log('login status: ', app.$socket && app.$socket.authState === 'authenticated')
    return app.$socket && app.$socket.authState === 'authenticated'
}

export function login(user_id, password) {
    app.$socket.emit('login', {user_id: user_id});
}

export function logout() {
    app.$socket.emit('logout', {user_id: app.$socket.authToken.username});
}

export function getDisplayName() {
    return app.$socket && app.$socket.authToken.username;
}