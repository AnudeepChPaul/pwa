<template>
	<div
	class="chat-list">
		{{ text }}
	</div>
</template>

<script>
export default {
	name: 'ChatList',
	props: {
		text: {
			required: true,
			type: String
		}
	}
};
</script>

<style scoped>

</style>
