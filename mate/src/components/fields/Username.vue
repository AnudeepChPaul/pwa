<template>
    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input :class="['input', controls.is_available !== null && (controls.is_available ? 'is-success' : 'is-danger')]"
                   type="text"
                   placeholder="username"
                   @keyup="onKeyUp">
            <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            <span v-show="controls.is_available !== null && controls.is_available"
                  class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
        </div>
        <p v-show="controls.is_available !== null && controls.is_available"
           class="help is-success">This username is available</p>
        <p v-show="controls.is_available !== null && !controls.is_available"
           class="help is-danger">This username is already taken</p>
    </div>
</template>

<script>
    export default {
        name: "Username",
        data: () => ({
            controls: {
                is_available: null
            }
        }),
        methods: {
            onKeyUp(event) {
                this.$emit('value', event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>