<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
    import * as auth_handler from '@/utils/auth_handler';

export default {
	name: 'App',

	created() {
        var vm = this;
        auth_handler.init();
        auth_handler.subscribe('loginstatus', (login_status) => {
            vm.$router.push({
                path: !login_status.status ? '/login' : '/home'
            })
        });
	}
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
