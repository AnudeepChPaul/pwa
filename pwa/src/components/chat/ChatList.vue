<template>
	<div
		class="chat-list-item"
		:class="!owner ? 'reverse': ''"
	>
		<div class="spacer"/>
		<div class="info">
			<button
			:class="[owner ? 'my-chat': 'friend-chat']">
				{{ text }}
			</button>
			<span/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ChatList',
	props: {
		text: {
			required: true,
			type: String
		},
		owner: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
    .chat-list-item, .info {
        margin: 5px auto;
        display: flex;
        align-content: center;
        align-content: center;
        justify-content: space-evenly;
    }

    .chat-list-item.reverse {
        flex-direction: row-reverse;
    }

    .my-chat, .friend-chat, .info, .spacer {
        flex: 1;
    }

    .my-chat, .friend-chat {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 6px;
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        border-color: transparent;
    }

    .friend-chat {
        background-color: azure;
        text-align: end;
        border-radius: 5px 0 0 5px;
    }

    .my-chat {
        background-color: #ffffff;
        text-align: start;
        border-radius: 0 5px 5px 0;
    }

    button:focus {
        outline-color: transparent;
    }
</style>
