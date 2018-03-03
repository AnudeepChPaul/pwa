<template>
    <div class="column is-half is-offset-one-quarter add-shadow">
        <div class="tile is-child notification">
            <username @value="onUsernameChange"/>
            <password @value="onPasswordChange"/>
            <div class="has-text-centered">
                <normal-button @click="onButtonClick">
                    <span>Login</span>
                </normal-button>
            </div>
        </div>
    </div>
</template>

<script>
    import username from '@/components/fields/Username';
    import password from '@/components/fields/Password';
    import normalButton from '@/components/buttons/NormalButton';
    import {mapGetters} from 'vuex';
	import user from '@/store/module/user';

    export default {
        name: "Login",
        components: {
            username,
            password,
            normalButton
        },
        data: () => ({
            controls: {
                user_name_available: false
            },
            credentials: {
                username: '',
                password: ''
            }
        }),
        computed: {
            ...mapGetters({
                'isLoggedIn': 'auth/GET_LOGIN_STATUS'
            })
        },
        watch: {
            isLoggedIn(status) {
				// register the user store
				this.$store.registerModule('user', user);				
				this.$store.dispatch('user/UPDATE_USER_DATA');
            }
        },
        beforeCreate() {
        },
        mounted() {
            console.log('login mounted')
            document.title = 'Login';
        },
        methods: {
            onButtonClick() {
                this.$store.dispatch('auth/LOG_IN');
            },

            onUsernameChange(value) {
                this.credentials.username = value;
            },

            onPasswordChange(value) {
                this.credentials.password = value;
            }
        }
    }
</script>

<style scoped>

</style>
<style lang="scss">
    @import "../styles/box";
</style>