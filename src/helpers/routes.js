import MessageBox from "@/components/messages/MessageBox.vue";

const routes = [{ path: "/:id", name: "dialog", component: MessageBox }, { path: "/", name: "index", component: MessageBox }];

export default routes;
