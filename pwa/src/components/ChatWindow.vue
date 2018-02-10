<template>
	<div class="container">
		<div class="header">
			{{ user_name }}
		</div>
		<div class="chat-list-container">
			<chat-list
			text="some text"/>
		</div>
		<div class="footer">
			<input
				type="text"
				class="reply-box"
				ref="reply_text"
				@keypress.enter="onSubmitText"
			>
			<button
				class="big"
				@click="onSubmitText">Send
			</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ChatWindow',
	components: {
		'chat-list': () => (import('@/components/ChatList'))
	},
	props: {
		user_name: {
			required: true,
			type: String
		},
		user_id: {
			required: true,
			type: String
		}
	},
	methods: {
		onSubmitText() {
			console.log(this.$refs.reply_text.value);
			this.$refs.reply_text.value = '';
		}
	}
};
</script>

<style scoped>
	.container {
		display: flex;
		border: 1px solid #42b983;
		margin: 5px 5px;
		flex: 1;
		flex-direction: column;
	}

	.container .header {
		display: block;
		margin: 5px auto;
		height: min-content;
		border-bottom: 1px solid crimson;
	}

	.chat-list-container {
		flex: 1;
	}

	.footer {
		bottom: 0;
		display: inline-flex;
		height: 36px;
	}

	.reply-box {
		font-size: 16px;
	}

	.big {
		border-color: transparent;
		border-width: 1px;
		background-color: #42b983;
		color: aliceblue;
		flex: 1;
	}

</style>
