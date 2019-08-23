<template>
	<div class="message-box">
		<template v-if="!is_loading && $route.params.id">
			<div ref="message_box" class="message-box__messages">
				<message-item v-for="message in messages" :key="message.id" :message="message" />
			</div>
			<message-sender :dialog-id="$route.params.id"></message-sender>
		</template>
		<template v-else-if="!is_loading && !$route.params.id">
			<span class="message-box__empty">Выберите чат, чтобы начать разговор</span>
		</template>
		<template v-else>
			<div class="loader--container">
				<div class="loader">
					<svg class="circular" viewBox="25 25 50 50">
						<circle
							class="path"
							cx="50"
							cy="50"
							r="20"
							fill="none"
							stroke-width="2"
							stroke-miterlimit="10"
						/>
					</svg>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	const Message = () => import("@/components/messages/Message.vue");
	const Form = () => import("@/components/messages/Form.vue");
	import { mapGetters } from "vuex";

	export default {
		name: "message-box",
		components: {
			"message-item": Message,
			"message-sender": Form
		},
		data: function() {
			return {
				is_loading: false
			};
		},
		computed: {
			...mapGetters(["dialogs"]),
			messages: function() {
				let messages = this.dialogById(this.dialogs, this.$route.params.id);
				if (!messages.length) {
					return [];
				}
				messages = messages[0].parts;
				return messages;
			}
		},
		methods: {
			dialogById: function(dialogs, id) {
				return dialogs.filter(dialog => {
					return dialog.id == id;
				});
			}
		},
		watch: {
			"$route.params.id": {
				immediate: true,
				handler: function() {
					this.is_loading = true;
					setTimeout(() => {
						this.is_loading = false;
					}, 1000);
				}
			}
		}
	};
</script>

<style lang="scss" scoped src="@/assets/scss/messagebox/message-box.scss">
</style>