<template>
  <div class="lg:col-span-12 mt-8">
    <h3 class="font-display text-2xl font-bold mb-6 flex items-center gap-4">
      Tech Stack <span class="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></span>
    </h3>
    
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="group bg-card/50 hover:bg-card border border-white/5 hover:border-neon/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-12 h-12 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(204,255,0,0.5)] transition-all duration-300"
        />
        <h4 class="font-medium text-sm text-white/70 group-hover:text-white transition-colors text-center">
          {{ skill.name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  // { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  // { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  // { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white'},
  { name: 'n8n', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/n8n.svg' },
]);
</script>

<style scoped>
</style>

