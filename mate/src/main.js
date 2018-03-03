// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import store from './store/store';
import router from './router/router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
	// baseURL: 'serv.pwa.in',
	timeout: 3000
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
