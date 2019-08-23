<template>
	<div class="message-item" :class="{is_owner: message.is_owner}">
		<div class="message-item__text">
			<p>{{ message.text }}</p>
		</div>
		<div class="message-item__info">
			<span class="message-item__info__author">{{ message.author }}</span>
			<span class="message-item__info__date">{{ message.created }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			message: Object
		}
	};
</script>

<style lang="scss" scoped src="@/assets/scss/messagebox/message-item.scss">
</style>