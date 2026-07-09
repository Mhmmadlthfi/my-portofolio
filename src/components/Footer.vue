<template>
  <footer id="contact" class="py-24 relative overflow-hidden border-t border-white/10 mt-12 bg-card">
    <div class="absolute inset-0 bg-noise opacity-50"></div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
      
      <h2 class="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6">
        Start a <span class="text-outline">New Project?</span>
      </h2>
      
      <p class="text-zinc-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
        I am always open to discussing work opportunities or partnerships. Let's create something amazing together.
      </p>

      <a 
        href="mailto:mhmmadlthfi54@gmail.com"
        class="inline-block bg-neon text-dark font-bold font-display text-xl px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-105 transition-all duration-300"
      >
        Send a Message
      </a>

      <div class="mt-24 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/10">
        
        <div class="text-zinc-400 text-sm font-medium order-2 lg:order-1">
          Based in <span class="text-white font-semibold">Majalengka, West Java</span>
        </div>

        <div class="flex items-center justify-center gap-4 flex-wrap order-1 lg:order-2">
          <a 
            v-for="link in socialLinks" 
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
            :aria-label="link.name"
          >
            <i :class="link.iconClass" class="text-xl"></i>
          </a>
        </div>

        <p class="text-zinc-600 text-sm order-3">
          © 2026 Muhammad Lutfi Wahid. All rights reserved.
        </p>

      </div>
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
    url: 'https://instagram.com/mhmmadlthfi_',
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

<style scoped>
</style>