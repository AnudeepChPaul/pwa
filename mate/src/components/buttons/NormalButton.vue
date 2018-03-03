<template>
    <button class="button is-primary is-centered" @click="emitClickEvent">
        <slot>Done</slot>
    </button>
</template>

<script>
    export default {
        name: "NormalButton",
        methods: {
            emitClickEvent() {
                this.$emit('click', event);
            }
        }
    }
</script>

<style lang="scss" scoped>
    $button-background-color: 'black';
</style>