<template>
    <div class="hello">
        {{ msg }}
        <span>
            <button @click="logout()">Logout</button>
        </span>
        <hr>
        <div class="chat-area">
            <chat-window
                    :user_name=username
                    :to_user_id=username
                    user_id="1"/>
        </div>
    </div>
</template>

<script>
    import * as auth_handler from '@/utils/auth_handler';

    export default {
        name: 'Chat',
        components: {
            'chat-window': () => (import('@/components/chat/ChatWindow.vue'))
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js Chat App',
                username: auth_handler.getDisplayName()
            };
        },
        methods: {
            logout() {
                auth_handler.logout();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "~bulma";

</style>
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .chat-area {
        display: inline-flex;
        margin: auto;
        width: 80%;
        height: 500px;
    }
</style>
