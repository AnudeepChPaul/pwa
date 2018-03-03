<template>
	<div class="hello">
		{{ msg }}
		<hr>
		<div class="chat-area">
			<chat-window
				user_name="User 1"
				to_user_id = "2"
				user_id="1"/>
			<chat-window
				user_name="User 2"
				to_user_id="1"
				user_id="2"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Chat',
	components: {
		'chat-window': () => (import('@/components/ChatWindow.vue'))
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js Chat App',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
