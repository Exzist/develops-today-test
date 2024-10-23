import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ApiService from "./core/services/ApiService";

const app = createApp(App);

app.use(router);
app.use(createPinia());
ApiService.init(app);
app.mount("#app");
