<template>
  <section id="about" class="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

      <!-- Kolom Kiri: Deskripsi Profil (8 Kolom) -->
      <div class="lg:col-span-8 bg-card rounded-[2rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group">
        <!-- Efek Neon Background -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[80px] -z-10 group-hover:bg-neon/20 transition-all duration-700"></div>
        
        <!-- Label Section -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-semibold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-neon animate-pulse"></span> About Me
        </div>
        
        <!-- Heading Utama -->
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Engineering <span class="text-neon">Systems</span> with <span class="bg-white text-dark px-2 rounded-lg italic">High Standards.</span>
        </h2>
        
        <!-- Paragraf Deskripsi (Versi Bahasa Inggris yang Dipersingkat) -->
        <div class="space-y-4">
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            A Junior Fullstack Developer focused on Backend Development. I view code as a long-term investment, engineering systems with high-quality standards rather than just making them 'work'.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            I emphasize clean architecture, maintainability, and scalable performance. As an adaptable developer, I believe a solid technical foundation and meticulous planning are key to delivering stable and efficient digital solutions.
          </p>
        </div>
      </div>

      <!-- Kolom Kanan: Statistik & CTA (4 Kolom) -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        <!-- Kartu Pengalaman -->
        <div class="bg-card rounded-[2rem] p-8 border border-white/5 flex-1 flex flex-col justify-center items-center text-center">
          <h3 class="font-display text-6xl font-bold text-white mb-2">2+</h3>
          <p class="text-zinc-400 font-medium">Years of Learning & Growing</p>
        </div>
        
        <!-- Kartu Hire Me / Contact -->
        <a href="#contact" class="bg-neon rounded-[2rem] p-8 text-dark flex-1 flex flex-col justify-center items-center text-center cursor-pointer hover:scale-[0.98] transition-transform block w-full no-underline">
          <h3 class="font-display text-3xl font-bold mb-2">Hire Me</h3>
          <p class="font-medium opacity-80 text-sm">Let's collaborate on your project</p>
          <svg class="w-8 h-8 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      <!-- Skills Section di-import langsung di dalam grid tanpa tambahan wrapper eksternal -->
      <SkillsSection />

    </div>
  </section>
</template>

<script setup>
import SkillsSection from './SkillsSection.vue';
</script>

<style scoped>
/* Anda tidak perlu banyak custom CSS karena styling menggunakan Tailwind. */
/* Jika efek khusus dari file sebelumnya belum terbawa secara global, pastikan terdefinisi di style global atau tailwind config Anda. */
</style>