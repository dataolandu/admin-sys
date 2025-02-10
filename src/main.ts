import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./store";
import './styles/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router);
app.use(pinia);
app.mount("#app");
