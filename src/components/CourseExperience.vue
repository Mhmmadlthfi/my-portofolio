<template>
  <section id="courses" class="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <!-- Label Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-semibold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-neon animate-pulse"></span> Training & Courses
        </div>
        
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Continuous <span class="text-neon">Learning</span>
        </h2>
      </div>
      
      <!-- Navigasi Desktop & Tablet (Disembunyikan di Mobile) -->
      <div class="hidden md:flex gap-4">
        <button 
          @click="scroll('prev')" 
          class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon hover:text-neon hover:bg-neon/10 transition-all duration-300"
          aria-label="Previous Course"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button 
          @click="scroll('next')" 
          class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon hover:text-neon hover:bg-neon/10 transition-all duration-300"
          aria-label="Next Course"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>

    <!-- Scrollable Container -->
    <div 
      ref="scrollContainer"
      class="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0"
    >
      
      <!-- Course Card -->
      <div 
        v-for="(course, index) in courses" 
        :key="index"
        class="shrink-0 snap-start w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group bg-card rounded-[2rem] p-8 border border-white/5 hover:border-neon/30 transition-all duration-500 flex flex-col relative overflow-hidden"
      >
        <!-- Efek Glow Hover di dalam Card -->
        <div class="absolute top-0 right-0 w-40 h-40 bg-neon/5 rounded-full blur-[60px] -z-10 group-hover:bg-neon/15 transition-colors duration-700"></div>

        <!-- Header Card: Issuer & Year -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <span class="text-sm font-bold text-white">{{ course.issuer }}</span>
          </div>
          <span class="text-xs font-bold text-zinc-500 border border-white/10 bg-black/20 rounded-full px-3 py-1">
            {{ course.year }}
          </span>
        </div>
        
        <!-- Info course -->
        <h3 class="font-display text-xl font-bold mb-4 group-hover:text-neon transition-colors duration-300 leading-snug">
          {{ course.title }}
        </h3>
        
        <p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {{ course.description }}
        </p>
        
        <!-- Action Link -->
        <div class="pt-5 border-t border-white/10 mt-auto">
          <a 
            :href="course.filePath" 
            target="_blank"
            class="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon transition-colors"
          >
            View Certificate
            <svg class="w-5 h-5 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth > 1024 
      ? scrollContainer.value.clientWidth / 3 
      : scrollContainer.value.clientWidth / 2; 
      
    scrollContainer.value.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }
};

const courses = [
  {
    title: 'Learn Data Analysis with Python',
    issuer: 'Dicoding',
    year: 2024,
    description: 'Completed a comprehensive data analysis course covering fundamental concepts, descriptive statistics, data wrangling, exploratory data analysis (EDA), data visualization, and building interactive dashboards with Streamlit. The course concluded with a final exam and a Python-based data analysis project.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-belajar-analisis-data-dengan-python.pdf`,
  },
  {
    title: 'Introduction to Python Programming',
    issuer: 'Dicoding',
    year: 2024,
    description: 'An industry-standard Python programming course for beginners. Topics included Python fundamentals, data manipulation, control flow, arrays, matrices, subprograms, OOP, PEP8, unit testing, and an introduction to popular libraries for text processing, data science, web scraping, machine learning, and web development.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-memulai-pemrograman-dengan-python.pdf`,
  },
  {
    title: 'Learn Fundamentals of Data Science',
    issuer: 'Dicoding',
    year: 2024,
    description: 'An introductory data science course covering data types, data-driven decision making, analysis cycles, and tools like SQL, NoSQL, Excel, SPSS, and Tableau, including a Python vs R comparison. Topics also covered basic machine learning, career opportunities, and portfolio exercises.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-belajar-dasar-data-science.pdf`,
  },
  {
    title: 'Learn Fundamental JavaScript Programming',
    issuer: 'Dicoding',
    year: 2023,
    description: 'Completed web and backend development training with Node.js aligned with AWS industry standards. Topics covered JavaScript fundamentals, OOP, functional programming, environment management, modules, error handling, asynchronous processing, NPM usage, and automated testing.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-belajar-dasar-pemrograman-javascript.pdf`,
  },
  {
    title: 'Learn Fundamentals of DevOps',
    issuer: 'Dicoding',
    year: 2023,
    description: 'A comprehensive DevOps course covering core concepts, The Three Ways principles, the CALMS Framework culture, and DevOps practices like CI/CD Pipelines and automation tools, supported by industry case studies (e.g., Amazon).',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-dasar-dasar-devops.pdf`,
  },
  {
    title: 'Introduction to Programming for Software Developers',
    issuer: 'Dicoding',
    year: 2023,
    description: 'Foundational programming training focusing on HTML, CSS, and JavaScript. Topics included application requirements, flowchart design, basic syntax, variables, data types, computer logic, pseudocode, and ES6 JavaScript.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-dasar-pemrograman-untuk-pengembang-software.pdf`,
  },
  {
    title: 'Learn Fundamental Structured Query Language (SQL)',
    issuer: 'Dicoding',
    year: 2023,
    description: 'An introductory SQL course for data analysts and scientists, covering database fundamentals, DBMS, and data types. Topics included DDL, DML (SELECT, INSERT, UPDATE, DELETE), constraints, and diagram usage in SQL, focusing on practical data management queries.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-belajar-dasar-sql.pdf`,
  },
  {
    title: 'Learn Fundamentals of Data Visualization',
    issuer: 'Dicoding',
    year: 2023,
    description: 'A foundational data processing course focusing on data visualization, tools, and context. Covered Google Sheets for data processing, effective charting techniques, common visualization pitfalls, and design principles like Gestalt and Preattentive Attributes.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-belajar-dasar-visualisasi-data.pdf`,
  },
  {
    title: 'Learn Fundamentals of Project Management',
    issuer: 'Dicoding',
    year: 2023,
    description: 'A project management course covering core concepts, the project manager\'s role, the project lifecycle, and methodologies like Waterfall, Agile, Lean, and Six Sigma. Also explored organizational structures, PMO roles, and career opportunities in the field.',
    filePath: `${import.meta.env.BASE_URL}documents/course/sertifikat-dasar-manajemen-proyek.pdf`,
  },
];
</script>

<style scoped>
/* Menyembunyikan scrollbar bawah namun tetap bisa discroll */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>