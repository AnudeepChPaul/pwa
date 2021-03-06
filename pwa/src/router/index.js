import Vue from 'vue';
import Router from 'vue-router';
import ChatBox from '@/components/ChatBox';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'ChatBox',
		component: ChatBox
	}]
});
