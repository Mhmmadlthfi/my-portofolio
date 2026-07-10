<template>
  <nav class="fixed w-full top-0 z-50 mix-blend-difference px-6 md:px-12 py-6 flex justify-between items-center">
    
    <!-- Logo -->
    <div class="font-display font-bold text-xl tracking-tighter text-white">
      LFW<span class="text-neon">.</span>
    </div>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-4 lg:gap-6 text-sm font-medium tracking-wide">
      <a href="#home" class="text-white hover:text-neon transition duration-300 uppercase">
        Home
      </a>
      <a href="#about" class="text-white hover:text-neon transition duration-300 uppercase">
        About
      </a>
      <a href="#experience" class="text-white hover:text-neon transition duration-300 uppercase">
        Experience
      </a>
      <a href="#projects" class="text-white hover:text-neon transition duration-300 uppercase">
        Work
      </a>
      <a href="#certifications" class="text-white hover:text-neon transition duration-300 uppercase">
        Credentials
      </a>
      <a href="#courses" class="text-white hover:text-neon transition duration-300 uppercase">
        Courses
      </a>
      <a href="#contact" class="text-white hover:text-neon transition duration-300 uppercase">
        Contact
      </a>
    </div>
    
    <!-- CTA Button -->
    <a href="#contact" class="border border-white/20 rounded-full px-5 py-2 text-sm text-white hover:bg-neon hover:text-dark hover:border-neon transition duration-300 uppercase">
      Let's Talk
    </a>
    
    <!-- Mobile Menu Toggle Button -->
    <button class="md:hidden text-white focus:outline-none" @click="toggleMobileMenu" aria-label="Toggle mobile menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <!-- Mobile Menu Dropdown -->
    <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-lg border-t border-white/10 mt-2 md:hidden">
      <div class="flex flex-col px-6 py-4 space-y-4">
        <a href="#home" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Home
        </a>
        <a href="#about" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          About
        </a>
        <a href="#experience" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Experience
        </a>
        <a href="#projects" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Work
        </a>
        <a href="#certifications" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Credentials
        </a>
        <a href="#courses" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Courses
        </a>
        <a href="#contact" class="text-white hover:text-neon transition duration-300 uppercase block py-2" @click="closeMobileMenu">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleClickOutside = (event) => {
  const nav = document.querySelector('nav')
  const mobileToggle = document.querySelector('button[aria-label="Toggle mobile menu"]')
  
  if (nav && !nav.contains(event.target) && mobileToggle && !mobileToggle.contains(event.target)) {
    closeMobileMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu()
  }
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
/* Smooth transition for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar for mobile menu */
.mobile-menu-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(204, 255, 0, 0.3) transparent;
}
.mobile-menu-scroll::-webkit-scrollbar {
  width: 6px;
}
.mobile-menu-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.mobile-menu-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(204, 255, 0, 0.3);
  border-radius: 3px;
}

/* Active link indicator */
.nav-link-active {
  color: var(--color-neon);
  position: relative;
}
.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-neon);
  border-radius: 1px;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  nav {
    backdrop-filter: blur(10px);
    background-color: rgba(10, 10, 12, 0.8);
  }
  .mobile-menu {
    animation: slideDown 0.3s ease;
  }
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>