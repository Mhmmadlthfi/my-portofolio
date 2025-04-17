<template>

  <section id="certifications" class="py-5" data-aos="fade-up">

    <div class="container">

      <h2 class="text-center mb-4 gradient-text">Sertifikasi</h2>

      <div class="scroll-container d-flex overflow-auto gap-4 px-2 py-1 pb-2">

        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="card course-card glass flex-shrink-0 p-4 shadow-sm"
        >

          <div class="card-body">

            <h5 class="card-title gradient-text">{{ cert.title }}</h5>

            <p class="card-text">{{ cert.issuer }} - {{ cert.year }}</p>

            <a
              :href="cert.link"
              target="_blank"
              class="btn btn-sm btn-gradient"
            >
               Lihat Sertifikat
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup>
  const certifications = [
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      year: 2024,
      link: '/documents/certifications/software-engineer-certificate.pdf',
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      year: 2024,
      link: '/documents/certifications/software-engineer-intern-certificate.pdf',
    },
    {
      title: 'Microsoft Office Specialist',
      issuer: 'Certiport',
      year: 2024,
      link: '/documents/certifications/sertifikat-MOS.pdf',
    },
    {
      title: 'Data Engineering Professional Certication',
      issuer: 'Rapidminer',
      year: 2021,
      link: '/documents/certifications/sertifikat-data-engineering-professional-rapidminer.pdf',
    },
  ];
</script>

<style scoped>
  .scroll-container {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.course-card {
  width: 25%;
  min-width: 450px;
  border-radius: 1rem;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-2px);
}

.card-title {
  font-weight: 600;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.4;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background: #18335a;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .course-card {
    width: 90%;
    min-width: 90%;
  }
}
</style>

