<template>
	<div class="container">
		<div class="header">
			{{ user_name }}
		</div>
		<div
			v-if="emptyConversation"
			class="chat-empty">
			<div>
				Why Wait ? Start a conversation
			</div>
		</div>
		<div
			v-else
			class="chat-list-container">
			<chat-list
				v-for="(chat,index) in chats"
				:owner="chat.user_id === user_id"
				:text="chat.text"
				:key="index"/>
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
		'chat-list': () => (import('@/components/chat/ChatList'))
	},
	props: {
		user_name: {
			required: true,
			type: String
		},
		user_id: {
			required: true,
			type: String
		},
		to_user_id: {
			required: true,
			type: String
		}
	},
	data: () => ({
		chats: []
	}),
	computed: {
		emptyConversation() {
			return this.chats.length === 0;
		}
	},
	created() {
		const vm = this;
		// this.$_message_channel = this.$_socket.subscribe(`post_message{this.user_id}`);
		// this.$_message_channel.watch((data) => {
		// 	vm.chats.push(data);
		// });
	},
	methods: {
		onSubmitText() {
			this.$_socket.publish('chat', {
				user_id: this.user_id,
				to_user_id: this.to_user_id,
				text: this.$refs.reply_text.value
			});
			this.chats.push({
				user_id: this.user_id,
				to_user_id: this.to_user_id,
				text: this.$refs.reply_text.value
			});
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
        margin: 0px auto;
        height: min-content;
        width: 100%;
        background-color: #42b983;
        padding: 9px 0px;
    }

    .chat-list-container, .chat-empty {
        flex: 1;
    }

    .footer {
        bottom: 0;
        display: inline-flex;
        height: 36px;
    }

    .reply-box {
        font-size: 16px;
        flex: 1;
    }

    .big {
        border-color: transparent;
        border-width: 1px;
        background-color: #42b983;
        color: aliceblue;
    }

    .chat-empty {
        text-align: center;
        margin: auto;
        display: inline-flex;
    }

    .chat-empty div {
        height: min-content;
        margin: auto;
    }

</style>
