<template>

  <section id="skills" class="py-5" data-aos="fade-up">

    <div class="container">

      <h2 class="text-center mb-4 gradient-text">Keahlian</h2>

      <div class="scroll-container d-flex overflow-auto gap-4 px-2 py-1 pb-2">

        <div
          v-for="skill in skills"
          :key="skill.name"
          class="card skill-card glass flex-shrink-0 p-3 shadow-sm d-flex flex-column align-items-start justify-content-between"
        >

          <div class="d-flex align-items-center w-100 mb-2">

            <img
              :src="skill.icon"
              :alt="skill.name"
              class="me-3"
              style="width: 40px; height: 40px"
            />

            <div>

              <h6 class="mb-0 text-light fw-semibold">{{ skill.name }}</h6>

              <small class="text-light">{{ skill.level }}</small>

            </div>

          </div>

          <div class="progress position-relative w-100" style="height: 16px">

            <div
              class="progress-bar d-flex align-items-center justify-content-center"
              role="progressbar"
              :style="{ width: skill.percent + '%' }"
            >

              <small class="text-white fw-bold">{{ skill.percent }}%</small>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup>
  import { ref } from 'vue';

  const skills = ref([
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 'Intermediate',
      percent: 50,
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 'Intermediate',
      percent: 50,
    },
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'ReactJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 'Beginner',
      percent: 25,
    },
    {
      name: 'Vue.js 3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      level: 'Beginner',
      percent: 25,
    },
    {
      name: 'Jupyter Notebook',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      level: 'Beginner',
      percent: 25,
    },
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      level: 'Advanced',
      percent: 75,
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      level: 'Intermediate',
      percent: 50,
    },
  ]);
</script>

<style scoped>
  .scroll-container {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.skill-card {
  width: 250px;
  min-width: 250px;
  scroll-snap-align: start;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-3px);
}

.progress {
  background-color: rgba(255, 255, 255, 0.1);
}

.progress-bar {
  transition: width 0.6s ease;
  font-size: 0.75rem;
  background: linear-gradient(135deg, #00ddeb, #8b5cf6);
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background: #18335a;
  border-radius: 10px;
}
</style>

