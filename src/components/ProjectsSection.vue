<template>
  <section id="projects" class="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-semibold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-neon animate-pulse"></span> Portfolio
        </div>
        
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Featured <span class="text-neon">Projects</span>
        </h2>
      </div>
      
      <p class="text-zinc-400 max-w-md text-base leading-relaxed md:text-right">
        A selection of my recent work focusing on scalable backend systems, seamless API integrations, and practical solutions.
      </p>
    </div>

    <div class="flex flex-col gap-12">
      
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="group bg-card rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-neon/30 transition-all duration-500 relative overflow-hidden"
      >
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] -z-10 group-hover:bg-neon/10 transition-colors duration-700 opacity-50 pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div class="lg:col-span-5 flex flex-col h-full">
            <span class="text-white/10 font-display text-6xl md:text-7xl font-bold mb-4 block group-hover:text-neon/20 transition-colors">
              {{ String(index + 1).padStart(2, '0') }}.
            </span>
            
            <h3 class="font-display text-3xl md:text-4xl font-bold mb-6 group-hover:text-neon transition-colors duration-300 leading-snug">
              {{ project.title }}
            </h3>

            <div class="flex flex-wrap gap-2 mb-8">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 group-hover:border-white/20 transition-colors"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="mt-auto pt-8">
              <a 
                :href="project.link" 
                target="_blank"
                class="inline-flex items-center gap-2 text-sm font-bold text-dark bg-neon px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105 transition-all duration-300"
              >
                View Repository
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>

          <div class="lg:col-span-7 flex flex-col justify-center">
            
            <p class="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              {{ project.description }}
            </p>
            
            <div class="bg-black/40 border-l-2 border-neon p-6 md:p-8 rounded-r-2xl">
              <span class="text-white text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Key Challenge
              </span>
              <p class="text-zinc-400 text-sm md:text-base leading-relaxed">
                {{ project.challenges }}
              </p>
            </div>
            
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
    title: 'Web and Mobile-Based Complaint Management System',
    description: 'This system makes it easier for customers to submit complaints and helps company staff monitor and handle incoming complaints. There are five types of users: customers, marketing manager, marketing staff, aftersales staff, and technicians. The main focus is on the complaint handling workflow by aftersales staff and technicians until completion. Built using Laravel 10 for the backend/API and React Native (Expo) for the mobile app.',
    technologies: ['Laravel 10', 'Laravel Sanctum', 'Bootstrap 5', 'MySQL', 'React Native (Expo)', 'Axios'],
    challenges: 'Integrating the Laravel API into the mobile app, creating secure API authentication with Sanctum, and managing complex data flows and user roles in a multi-level user system.',
    link: 'https://github.com/Mhmmadlthfi/sistem-komplain-manajemen#readme',
  },
  {
    title: 'Wedding Equipment Rental System',
    description: 'A wedding equipment rental system consisting of a mobile app for clients and a web app for admins. The mobile app allows clients to browse catalogs, place orders, check stock availability based on rental dates, and make online payments. The web app is used by admins to manage catalogs, orders, and payment statuses. Built using Laravel for the backend/API and React Native (Expo) for the mobile app.',
    technologies: ['Laravel', 'Laravel Sanctum', 'MySQL', 'React Native (Expo)', 'Axios', 'Midtrans', 'Blade Template', 'AlpineJS'],
    challenges: 'Integrating the Laravel API with the mobile app, managing user authentication using Sanctum, checking stock availability based on rental date ranges, and integrating the Midtrans payment gateway while handling payment notifications.',
    link: 'https://github.com/Mhmmadlthfi/sewa-perlengkapan-nikah-mobile#readme',
  },
  {
    title: 'Data Analysis Project',
    description: 'The final project for the "Learn Data Analysis with Python" course at Dicoding. In this project, I analyzed a Bike Sharing Dataset provided by the course. This project was a key requirement for graduation and was executed systematically. The analysis results are accessible via an interactive dashboard.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit', 'Anaconda'],
    challenges: 'Building an effective data analysis pipeline, conducting meaningful data exploration and visualization, and presenting the analysis results in an interactive dashboard using Streamlit.',
    link: 'https://github.com/Mhmmadlthfi/submission_proyek_analisis_data',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website created to showcase my profile, project experience, certifications, and contact information. Built using Vue 3 with the Composition API approach for a more modular and maintainable code structure.',
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite'],
    challenges: 'Optimally implementing the Composition API to keep the code clean and structured, building a highly responsive and modern interface using Tailwind CSS, and leveraging Vite for fast and optimized asset bundling.',
    link: 'https://github.com/Mhmmadlthfi/my-portofolio',
  }
]);
</script>

<style scoped>
</style>