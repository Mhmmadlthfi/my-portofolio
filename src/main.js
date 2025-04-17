import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/style.css';

import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';

AOS.init({
  duration: 1000,
  once: true,
});

const app = createApp(App);

app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});

app.mount('#app');
