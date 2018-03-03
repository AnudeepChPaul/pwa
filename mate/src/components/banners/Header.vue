<template>
    <section class="hero is-primary">
        <div class="column has-text-centered">
            <div class="level is-mobile">
                <div class="level-item level-left">
                    {{ user_data.display_name || 'fetching your name...' }}
                </div>
                <div class="level-item level-right">
                    <normal-button> Home </normal-button>
                    <normal-button> Menu </normal-button>
                    <normal-button> Account </normal-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	import normalButton from '@/components/buttons/NormalButton';
	import {mapGetters} from 'vuex';

    export default {
        name: "Header",
        data: () => ({
            text: 'Mate'
        }),
        components: {
            normalButton
		},
		computed: {
            ...mapGetters({
                'user_data': 'user/GET_USER_DATA'
            })
        },
    }
</script>

<style scoped>

</style>