<template>
    <section id="app" class="container is-desktop is-fullhd is-widescreen">
        <router-view/>
    </section>
</template>

<script>
	import {mapGetters} from 'vuex';
	import user from '@/store/module/user';	

    export default {
		name: 'App',
		computed: {
            ...mapGetters({
                'isLoggedIn': 'auth/GET_LOGIN_STATUS'
            })
		},
		watch: {
            isLoggedIn(status) {
				// register the user store
				this.$store.registerModule('user', user);				
				// commit the user store.
				this.$store.dispatch('user/UPDATE_USER_DATA');
				
				var location = window.location.pathname.replace('/', '').indexOf('login') !== -1 
					? '/home'
					: window.location.path;

				this.$router.push({
                    path: status ? location : '/login'
                });
            }
        },
        created() {
            this.$store.dispatch('auth/AUTHENTICATE');
        }
    }
</script>

<style lang="scss">
    @import "~bulma";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        .input:active {
            border-color: transparent;
        }
    }
</style>
