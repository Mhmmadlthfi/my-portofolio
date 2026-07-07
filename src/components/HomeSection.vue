<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center bg-noise pt-12 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-dark/80"></div>

    <div class="relative z-10 w-full h-full flex items-center justify-center max-w-[100rem] mx-auto px-4">
      <div class="relative flex flex-col items-center justify-center w-full mt-10">
        <div class="w-full max-w-6xl flex justify-start md:pl-24 mb-[-3vw] relative z-20 pointer-events-none">
          <h2 class="font-display font-bold text-2xl md:text-4xl tracking-[0.4em] text-white/90 uppercase">
            Muhammad
          </h2>
        </div>

        <div class="relative z-30 w-full flex justify-center pointer-events-auto mix-blend-normal">
          <h1
            class="font-display font-extrabold text-[20vw] md:text-[16vw] leading-[0.8] tracking-tighter text-center uppercase text-outline cursor-crosshair -rotate-[5deg]"
            @mouseenter="handleTextHover"
            @mouseleave="handleTextLeave"
          >
            LUTFI
          </h1>
        </div>

        <div class="w-full max-w-6xl flex justify-end md:pr-32 mt-[-2vw] relative z-20 pointer-events-none">
          <h2 class="font-display font-bold text-2xl md:text-4xl tracking-[0.4em] text-white/90 uppercase">
            Wahid
          </h2>
        </div>

        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 md:w-[380px] md:h-[480px] bg-zinc-900 border-2 border-white/10 overflow-hidden rotate-[-3deg] hover:rotate-[1deg] transition-transform duration-700 z-10 shadow-2xl neon-glow"
          @mouseenter="handleImageHover"
          @mouseleave="handleImageLeave"
        >
          <img
            :src="profileImage"
            alt="Muhammad Lutfi Wahid"
            class="w-full h-full object-cover transition-all duration-700"
            :class="imageClasses"
            @error="console.error('Gagal memuat gambar di path:', profileImage)"
          />
        </div>
      </div>

      <div
        class="absolute bottom-12 left-6 md:left-16 hidden md:flex items-center justify-center w-32 h-32 z-30 opacity-70"
      >
        <svg class="animate-spin-slow w-full h-full text-white" viewBox="0 0 100 100">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text class="text-[11px] font-bold uppercase tracking-[0.15em] fill-current">
            <textPath href="#circlePath">Listen to the next project •</textPath>
          </text>
        </svg>
        <div class="absolute text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="absolute bottom-12 right-6 md:right-12 z-30 flex flex-col items-end text-right">
      <p class="font-display text-white text-3xl md:text-4xl font-bold uppercase mb-2 leading-none">
        Fullstack<br />Developer
      </p>
      <div class="w-16 md:w-20 h-1 bg-neon mt-4"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const isTextHovered = ref(false)
const isImageHovered = ref(false)

// Menggunakan import.meta.env.BASE_URL agar path menyesuaikan environment (lokal vs gh-pages)
const profileImage = `${import.meta.env.BASE_URL}images/profil-pantai-2.jpeg`

const handleTextHover = () => {
  isTextHovered.value = true
}

const handleTextLeave = () => {
  isTextHovered.value = false
}

const handleImageHover = () => {
  isImageHovered.value = true
}

const handleImageLeave = () => {
  isImageHovered.value = false
}

const imageClasses = computed(() => ({
  'opacity-70 mix-blend-luminosity': !isImageHovered.value,
  'opacity-100 mix-blend-normal': isImageHovered.value,
}))
</script>

<style scoped>
/* Semua styling utama sudah didefinisikan di src/style.css melalui @theme dan @utility */
/* Style tambahan khusus untuk komponen ini bisa ditambahkan di sini jika diperlukan */
</style>

