const routes = [{
	path: '/home',
	name: 'ChatBase',
	meta: { requiresAuth: true },
	component: () => (import('@/components/chat/Base'))
}, {
	path: '/login',
	name: 'Login',
	meta: { requiresAuth: false },
	component: () => (import('@//components/auth/Login'))
}];


export default routes.map(el => ({
	...el,
	beforeEnter(to, from, next) {
		to.meta;
	}
}));
