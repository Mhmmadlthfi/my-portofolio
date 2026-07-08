<template>
  <footer class="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 mt-24">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div class="text-zinc-400 text-sm font-medium">
        Based in <span class="text-white font-semibold">Majalengka, West Java</span>
      </div>

      <div class="flex items-center gap-6">
        <a 
          v-for="link in socialLinks" 
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-zinc-500 hover:text-neon transition-colors duration-300 transform hover:-translate-y-1"
          :aria-label="link.name"
        >
          <i :class="link.iconClass" class="text-xl"></i>
        </a>
      </div>

      <p class="text-zinc-600 text-sm">
        © 2026 Muhammad Lutfi Wahid. All Rights Reserved.
      </p>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/Mhmmadlthfi',
    iconClass: 'fab fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-lutfi-wahid-a86805265',
    iconClass: 'fab fa-linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/mhmmadLthfi_',
    iconClass: 'fab fa-instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/luthfimhmmad',
    iconClass: 'fab fa-facebook',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/MhmmadLthfi',
    iconClass: 'fa-brands fa-x-twitter',
  },
]);
</script>