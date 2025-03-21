import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { setupFirebase } from "./services/firebase";
import ConfirmationService from "primevue/confirmationservice";
import router from "./router";
import ToastService from "primevue/toastservice";

setupFirebase;

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ConfirmationService);
app.use(ToastService);

app.use(router);
app.mount("#app");
