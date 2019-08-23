<template>
	<router-link :to="{name: 'dialog', params: {id: dialog.id}}" class="list-item">
		<div class="list-item__heading">
			<strong class="list-item__heading__subject">{{ dialog.subject }}</strong>
			<span class="list-item__heading__datecreated">{{ dialog.created }}</span>
		</div>
		<p class="list-item__preview">{{ dialog.parts[dialog.parts.length-1].text }}</p>
	</router-link>
</template>

<script>
	export default {
		name: "list-item",
		props: {
			dialog: Object
		}
	};
</script>

<style lang="scss" scoped src="@/assets/scss/list/list-item.scss">
</style>