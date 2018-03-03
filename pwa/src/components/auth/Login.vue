<template>
    <div>
        Login Page
        <hr>
        <div>
            <input type="text" class="username-field" v-model="credentials.username">
            <div v-if="error.usernamerequired" class="error">Please enter a username</div>
        </div>
        <hr>
        <button @click="login()">
            Login
        </button>
    </div>
</template>>

<script>
    import * as auth_handler from '@/utils/auth_handler';

    export default {
        name: 'LoginVue',
        data: () => ({
            credentials: {
                username: ''
            },
            error: {
                usernamerequired: false
            }
        }),
        methods: {
            login() {
                if(!this.credentials.username) {
                    this.error.usernamerequired = true;
                    return;
                }
                auth_handler.login(this.credentials.username);
                this.credentials.username = '';
                this.error.usernamerequired = false;
            }
        }
    };
</script>

<style>
    button {
        border-color: transparent;
        border-radius: 5px;
        padding: 5px;
        background-color: #42b983;
        color: white;
    }
    .error {
        font-size: x-small;
        color: crimson;
    }
</style>
