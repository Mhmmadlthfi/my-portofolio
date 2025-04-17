<template>
  <section id="course" class="py-5" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center mb-4 gradient-text">
        Pengalaman Bootcamp & Course
      </h2>

      <div class="scroll-container d-flex overflow-auto gap-4 px-2 py-1 pb-2">
        <div
          v-for="(course, index) in courses"
          :key="index"
          class="card course-card glass flex-shrink-0 p-4 shadow-sm"
        >
          <div class="card-body">
            <h5 class="card-title gradient-text">
              {{ course.title }} - {{ course.issuer }}, {{ course.year }}
            </h5>
            <p class="card-text mb-3">{{ course.description }}</p>
            <a
              :href="course.filePath"
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
const courses = [
  {
    title: 'Belajar Analisis Data dengan Python',
    issuer: 'Dicoding',
    year: 2024,
    description:
      'Mengikuti kelas analisis data yang mencakup dasar-dasar analisis, statistik deskriptif, data wrangling, exploratory data analysis (EDA), visualisasi data, serta pembuatan dashboard interaktif dengan Streamlit. Kelas diakhiri dengan ujian dan proyek analisis data menggunakan Python.',
    filePath:
      '/documents/course/sertifikat-belajar-analisis-data-dengan-python.pdf',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding',
    year: 2024,
    description:
      'Mengikuti kelas pemrograman Python untuk pemula sesuai standar industri. Materi mencakup dasar Python, manipulasi data, kontrol alur program, array, matriks, subprogram (fungsi dan prosedur), OOP, PEP8, unit testing, serta pengenalan library populer untuk berbagai kebutuhan seperti teks, data, web scraping, machine learning, dan web development. Pembelajaran dilakukan melalui berbagai IDE, dan diakhiri dengan ujian akhir.',
    filePath:
      '/documents/course/sertifikat-memulai-pemrograman-dengan-python.pdf',
  },
  {
    title: 'Belajar Dasar Data Science',
    issuer: 'Dicoding',
    year: 2024,
    description:
      'Mengikuti kelas pengenalan data science yang mencakup jenis data, pengambilan keputusan berbasis data, siklus analisis, serta tools seperti SQL, NoSQL, Excel, SPSS, Tableau, dan perbandingan Python vs R. Materi juga meliputi dasar machine learning, peluang karier, latihan portofolio, dan diakhiri dengan ujian akhir.',
    filePath: '/documents/course/sertifikat-belajar-dasar-data-science.pdf',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas pengembangan web dan backend dengan Node.js sesuai standar industri AWS. Materi mencakup dasar JavaScript, OOP, pemrograman fungsional, pengelolaan environment, module, error handling, asynchronous processing, penggunaan NPM, serta pengujian otomatis. Kelas ditutup dengan ujian akhir.',
    filePath:
      '/documents/course/sertifikat-belajar-dasar-pemrograman-javascript.pdf',
  },
  {
    title: 'Belajar Dasar-Dasar DevOps',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas DevOps yang membahas dasar konsep, prinsip The Three Ways, kultur CALMS Framework, praktik DevOps seperti DevOps Pipeline, alat otomatisasi, dan studi kasus implementasi di perusahaan seperti Amazon. Kelas diakhiri dengan ujian akhir.',
    filePath: '/documents/course/sertifikat-dasar-dasar-devops.pdf',
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas pemrograman dasar untuk pemula dengan fokus pada HTML, CSS, dan JavaScript, serta pemahaman kebutuhan aplikasi, perancangan diagram alur, dan modifikasi aplikasi. Materi mencakup dasar pemrograman, sintaksis, variabel, tipe data, logika komputer, pseudocode, dan penggunaan JavaScript ES6. Kelas diakhiri dengan ujian akhir dan sertifikat kompetensi.',
    filePath:
      '/documents/course/sertifikat-dasar-pemrograman-untuk-pengembang-software.pdf',
  },
  {
    title: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas pengenalan SQL untuk data analyst dan data scientist, mencakup dasar data dan basis data, DBMS, serta jenis-jenis data. Materi juga meliputi SQL, DDL, DML (SELECT, INSERT, UPDATE, DELETE), constraints, dan penggunaan diagram dalam SQL. Praktik fokus pada query dasar untuk pengelolaan data. Kelas diakhiri dengan ujian akhir.',
    filePath: '/documents/course/sertifikat-belajar-dasar-sql.pdf',
  },
  {
    title: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas pengolahan data untuk pemula, mencakup dasar visualisasi data, tools, dan konteks data. Materi meliputi penggunaan Google Sheets untuk pengolahan data, teknik pembuatan grafik efektif, kesalahan umum dalam visualisasi, dan prinsip desain seperti Gestalt dan Preattentive Attributes. Kelas diakhiri dengan ujian akhir untuk evaluasi keterampilan dalam visualisasi data.',
    filePath: '/documents/course/sertifikat-belajar-dasar-visualisasi-data.pdf',
  },
  {
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding',
    year: 2023,
    description:
      'Mengikuti kelas manajemen proyek yang mencakup konsep dasar, peran manajer proyek, siklus manajemen proyek, dan metodologi seperti Waterfall, Agile, Lean, dan Six Sigma. Materi juga meliputi struktur organisasi dan peran PMO, serta peluang karier di bidang ini. Kelas diakhiri dengan ujian akhir.',
    filePath: '/documents/course/sertifikat-dasar-manajemen-proyek.pdf',
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

.card-text {
  font-size: 0.9rem;
  line-height: 1.4;
}

.course-card:hover {
  transform: translateY(-2px);
}

.course-card h5 {
  font-weight: 600;
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
