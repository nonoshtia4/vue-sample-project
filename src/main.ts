import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
});

app.use(router);

app.mount("#app");
