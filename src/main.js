import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

AOS.init({
  duration: 1000,
  once: true,
});

const app = createApp(App);
app.mount('#app');
