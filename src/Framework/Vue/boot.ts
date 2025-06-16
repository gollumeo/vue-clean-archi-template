import App from '@framework/Vue/App.vue';
import { createHead } from '@unhead/vue/client';
import { createApp } from 'vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
