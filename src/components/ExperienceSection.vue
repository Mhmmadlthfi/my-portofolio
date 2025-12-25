<template>
  <section id="experience" class="py-5" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center mb-5 gradient-text">Pengalaman Kerja</h2>

      <div class="glass p-4 rounded mx-auto" style="max-width: 900px">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="d-flex align-items-start"
          :class="{ 'mb-4': index !== experiences.length - 1 }"
        >
          <img
            :src="`${baseUrl}${exp.logo}`"
            :alt="`Logo ${exp.company}`"
            class="me-3 rounded"
            style="width: 60px; height: 60px; object-fit: contain"
          />

          <div class="text-start">
            <h5 class="fw-bold mb-1">{{ exp.company }}</h5>

            <p class="mb-2 text-white">
              {{ exp.position }} • {{ exp.period }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-2 d-flex flex-wrap gap-1">
              <span
                v-for="(tech, i) in exp.techStack"
                :key="i"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Responsibilities -->
            <ul class="mb-0">
              <li v-for="(task, i) in exp.responsibilities" :key="i">
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL

const experiences = [
  {
    company: 'Trusmi Group',
    position: 'Fullstack Developer',
    period: 'Agustus 2025 - Sekarang',
    logo: '/images/logo-tg.jpg',
    techStack: [
      'Codeigniter',
      'Laravel',
      'MySQL',
      'REST API',
      'HTML',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Jquery',
      'n8n'
    ],
    responsibilities: [
      'Mengembangkan dan memelihara aplikasi web internal perusahaan',
      'Membangun REST API untuk integrasi sistem',
      'Melakukan maintenance dan optimasi performa aplikasi',
      'Berkoordinasi dengan tim terkait untuk pengembangan fitur baru'
    ]
  }
]
</script>

<style scoped>
  .tech-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }
</style>
