import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

import routes from "./helpers/routes.js";
const router = new VueRouter({ routes });

import dialogs from "./store/dialogs.js";
const store = new Vuex.Store(dialogs);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
