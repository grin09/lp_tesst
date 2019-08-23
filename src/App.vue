<template>
	<div id="app">
		<List />
		<router-view></router-view>
	</div>
</template>

<script>
	const List = () => import("@/components/list/List.vue");
	import { mapActions } from "vuex";

	export default {
		name: "app",
		components: {
			List
		},
		methods: {
			...mapActions(["getDialogs"])
		},
		created: function() {
			this.getDialogs();
		}
	};
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>
