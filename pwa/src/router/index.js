import Vue from 'vue';
import Router from 'vue-router';
import Routes from './pwa_routes';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: Routes
});
