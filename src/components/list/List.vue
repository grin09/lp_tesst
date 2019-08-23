<template>
	<div class="list">
		<div class="list__heading">
			<span class="list__heading__caption">Сообщения</span>
			<span class="list__heading__caption list__heading__caption--count">{{count}}</span>
		</div>
		<div class="list__box">
			<ListItem v-for="dialog in dialogs" :key="dialog.id" :dialog="dialog" />
		</div>
	</div>
</template>

<script>
	const ListItem = () => import("@/components/list/ListItem.vue");
	import { mapGetters } from "vuex";

	export default {
		name: "List",
		components: {
			ListItem
		},
		computed: {
			...mapGetters(["dialogs"]),
			count: function() {
				let count = 0;
				this.dialogs.forEach(dialog => {
					count += dialog.parts.length;
				});
				return count;
			}
		}
	};
</script>

<style lang="scss" scoped src="@/assets/scss/list/list.scss">
</style>