import axios from "axios";
import { DIALOGS_URI } from "../helpers/api.js";

const dialogs = {
	state: {
		dialogs: [],
		is_form_disabled: false
	},
	mutations: {
		setDialogs: (state, payload) => {
			state.dialogs = payload;
		},
		setMessage: (state, message) => {
			state.dialogs.forEach(dialog => {
				if (dialog.id == message.dialog_id) {
					let now = new Date();
					let msg = {
						id: dialog.parts.length + 1,
						author: "vasya",
						text: message.text,
						created: `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1}-${
							now.getDate() < 10 ? "0" + now.getDate() : now.getDate()
						} ${now.getHours() < 10 ? "0" + now.getHours() : now.getHours()}:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`,
						is_owner: true
					};
					dialog.parts.push(msg);
				}
			});
		},
		setFormState: (state, flag) => {
			state.is_form_disabled = flag;
		}
	},
	getters: {
		dialogs: state => {
			return state.dialogs;
		},
		is_form_disabled: state => {
			return state.is_form_disabled;
		}
	},
	actions: {
		getDialogs: ({ commit }) => {
			axios
				.get(DIALOGS_URI)
				.then(res => {
					commit("setDialogs", res.data);
				})
				.catch(() => {
					// console.warn("ERR", err);
				});
		},
		addMessage: ({ commit }, message) => {
			commit("setMessage", message);
		},
		disable_form: ({ commit }) => {
			commit("setFormState", true);
		},
		enable_form: ({ commit }) => {
			commit("setFormState", false);
		}
	}
};

export default dialogs;
