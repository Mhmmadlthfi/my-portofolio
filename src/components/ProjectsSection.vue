<template>

  <section id="projects" class="py-5" data-aos="fade-up">

    <div class="container">

      <h2 class="text-center mb-5 gradient-text fs-2">Proyek Saya</h2>

      <div class="scroll-container d-flex overflow-auto gap-4 px-2 py-1 pb-2">

        <div
          v-for="project in projects"
          :key="project.title"
          class="card glass flex-shrink-0 p-4 shadow-sm project-card"
        >

          <div class="card-body">

            <h3 class="card-title gradient-text fs-4">{{ project.title }}</h3>

            <p class="card-text fs-7">{{ project.description }}</p>

            <p class="fs-7">

              <strong>Teknologi:</strong>
               {{ project.technologies }}
            </p>

            <p class="fs-7">

              <strong>Tantangan:</strong>
               {{ project.challenges }}
            </p>

            <a
              :href="project.link"
              class="btn btn-gradient btn-sm mt-2"
              target="_blank"
            >
               Lihat Detail
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup>
  import { ref } from 'vue';

  const projects = ref([
    {
      title: 'Sistem Komplain Manajemen Berbasis Web dan Mobile',
      description:
        'Sistem ini memudahkan pelanggan dalam mengajukan keluhan dan membantu petugas perusahaan dalam memantau serta menangani komplain yang masuk. Terdapat lima jenis pengguna: pelanggan, manager marketing, staff marketing, staff aftersales, dan teknisi. Fokus utama sistem adalah pada alur penanganan keluhan oleh staff aftersales dan teknisi hingga selesai. Sistem dibuat menggunakan Laravel 10 untuk backend dan API, serta React Native (Expo) untuk aplikasi mobile.',
      technologies:
        'Laravel 10, Laravel Sanctum, Bootstrap 5, MySQL, React Native (Expo), Axios',
      challenges:
        'Mengintegrasikan API Laravel ke aplikasi mobile, membuat autentikasi API yang aman dengan Sanctum, dan mengelola alur data serta peran pengguna yang kompleks dalam sistem multi-level user.',
      link: 'https://github.com/Mhmmadlthfi/sistem-komplain-manajemen#readme',
    },
    {
      title: 'Proyek Analisis Data',
      description:
        'Proyek ini merupakan proyek akhir dari kelas "Belajar Analisis Data dengan Python" di Dicoding. Dalam proyek ini, saya melakukan analisis terhadap dataset penyewaan sepeda (Bike Sharing Dataset) yang disediakan oleh penyelenggara kelas. Proyek ini menjadi syarat penting untuk mendapatkan sertifikat kelulusan, sehingga pengerjaannya dilakukan secara serius dan terstruktur. Hasil analisis dapat diakses melalui dashboard interaktif: https://bzhhmue7na5gjalxnrrjhh.streamlit.app/',
      technologies: 'Python, Pandas, Matplotlib, Streamlit, Anaconda',
      challenges:
        'Menyusun pipeline analisis data yang efektif, melakukan eksplorasi dan visualisasi data yang bermakna, serta menyajikan hasil analisis dalam bentuk dashboard interaktif menggunakan Streamlit.',
      link: 'https://github.com/Mhmmadlthfi/submission_proyek_analisis_data',
    },
    {
      title: 'Portofolio Pribadi',
      description:
        'Proyek ini merupakan website portofolio pribadi yang dibuat untuk menampilkan informasi tentang diri saya, pengalaman proyek, sertifikasi, dan kontak. Website dibangun menggunakan Vue 3 dengan pendekatan Composition API untuk struktur kode yang lebih modular dan maintainable.',
      technologies: 'Vue 3, Bootstrap 5, AOS, tsParticles',
      challenges:
        'Menerapkan Composition API secara optimal agar kode tetap bersih dan terstruktur, mengelola animasi dengan AOS, serta menyesuaikan komponen agar responsif dan enak dilihat di berbagai perangkat.',
      link: 'https://github.com/Mhmmadlthfi/my-portofolio',
    },
  ]);
</script>

<style scoped>
  .fs-2 {
  font-size: 1.75rem;
}

.fs-4 {
  font-size: 1.25rem;
}

.fs-7 {
  font-size: 0.9rem;
  line-height: 1.4;
}

.scroll-container {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.project-card {
  width: 45%;
  min-width: 450px;
  border-radius: 1rem;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background: #18335a;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .project-card {
    width: 90%;
    min-width: 90%;
  }
}
</style>

