<template>
    <section class="container is-desktop is-fullhd is-widescreen">
        <custom-header></custom-header>
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            customHeader: () => (import('@/components/banners/Header'))
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        beforeCreate() {
            document.title = 'Home';
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
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
</style>
