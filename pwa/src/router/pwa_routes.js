import * as auth_handler from '@/utils/auth_handler';

const routes = [{
	path: '/home',
	name: 'ChatBase',
	meta: { requiresAuth: true },
	component: () => (import('@/components/chat/Base')),
    beforeEnter: (to, from, next) => {
        if(auth_handler.getLoginStatus()) {
            next();
        } else {
            next('/login');
        }
    }
}, {
	path: '/login',
	name: 'Login',
	meta: { requiresAuth: false },
	component: () => (import('@//components/auth/Login')),
    beforeEnter: (to, from, next) => {
        if(auth_handler.getLoginStatus()) {
            next('/home');
        } else {
            next();
        }
    }
}];


export default routes.map(el => ({
	...el
}));
