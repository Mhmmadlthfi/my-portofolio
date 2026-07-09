<template>
  <section id="certifications" class="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-semibold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-neon animate-pulse"></span> Credentials
        </div>
        
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Licenses & <span class="text-neon">Certifications</span>
        </h2>
      </div>
      
      <div class="hidden md:flex gap-4">
        <button 
          @click="scroll('prev')" 
          class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon hover:text-neon hover:bg-neon/10 transition-all duration-300"
          aria-label="Previous Certification"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button 
          @click="scroll('next')" 
          class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon hover:text-neon hover:bg-neon/10 transition-all duration-300"
          aria-label="Next Certification"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>

    <div 
      ref="scrollContainer"
      class="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0"
    >
      
      <div 
        v-for="(cert, index) in certifications" 
        :key="index"
        class="shrink-0 snap-start w-[80%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-card rounded-[2rem] p-8 border border-white/5 hover:border-neon/30 transition-colors duration-500 flex flex-col relative group"
      >
        <div class="absolute top-0 right-0 w-32 h-32 bg-neon/5 rounded-full blur-[50px] -z-10 group-hover:bg-neon/10 transition-colors duration-700"></div>

        <div class="flex justify-between items-start mb-8">
          <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon group-hover:scale-110 group-hover:bg-neon/10 group-hover:border-neon/30 transition-all duration-300">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <span class="text-xs font-bold text-zinc-500 border border-white/10 bg-black/20 rounded-full px-3 py-1">
            {{ cert.year }}
          </span>
        </div>
        
        <h3 class="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-neon transition-colors duration-300 leading-snug">
          {{ cert.title }}
        </h3>
        <p class="text-zinc-400 text-sm mb-8 flex-1">
          Issued by <span class="text-white font-medium">{{ cert.issuer }}</span>
        </p>
        
        <div class="pt-5 border-t border-white/10 mt-auto">
          <a 
            :href="cert.link" 
            target="_blank"
            class="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon transition-colors"
          >
            View Credential
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

const certifications = [
  {
    title: 'Software Engineer',
    issuer: 'HackerRank',
    year: 2024,
    link: `${import.meta.env.BASE_URL}/documents/certifications/software-engineer-certificate.pdf`,
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    year: 2024,
    link: `${import.meta.env.BASE_URL}/documents/certifications/software-engineer-intern-certificate.pdf`,
  },
  {
    title: 'Microsoft Office Specialist',
    issuer: 'Certiport',
    year: 2024,
    link: `${import.meta.env.BASE_URL}/documents/certifications/sertifikat-MOS.pdf`,
  },
  {
    title: 'Data Engineering Professional Certication',
    issuer: 'Rapidminer',
    year: 2021,
    link: `${import.meta.env.BASE_URL}/documents/certifications/sertifikat-data-engineering-professional-rapidminer.pdf`,
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