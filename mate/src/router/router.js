import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes/main'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routes
});

router.afterEach((to, from, next) => {
    console.log('from ', from.path, ' to ', to.path);
});

export default router;
