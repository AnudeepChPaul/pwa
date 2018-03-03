import store from '../../store/store';

export default [{
    path: '/home',
    name: 'Home',
    component: () => (import('@/components/Home')),
    beforeEnter(to, from, next) {
		console.log(store);
        if (store.getters['auth/GET_LOGIN_STATUS']) {
            next();
        } else {
            next('/login');
        }
    }
}, {
    path: '/login',
    name: 'Login',
    component: () => (import('@/components/Login')),
    beforeEnter(to, from, next) {
        if (store.getters['auth/GET_LOGIN_STATUS']) {
            next('/home');
        } else {
            next();
        }
    }
}, {
    path: '*',
    redirect: {
        path: '/home'
    }
}]