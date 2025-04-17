<template>

  <div id="app">

    <!-- Particles -->

    <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      :options="{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'slow',
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }"
    />

    <!-- Isi konten -->

    <div class="min-vh-100">

      <Navbar />

      <HomeSection />

      <AboutSection />

      <EducationSection />

      <ProjectsSection />

      <SkillsSection />

      <CourseExperience />

      <CertificationSection />

      <ContactSection />

      <Footer />

    </div>

  </div>

</template>

<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Navbar.vue';
  import HomeSection from './components/HomeSection.vue';
  import AboutSection from './components/AboutSection.vue';
  import EducationSection from './components/EducationSection.vue';
  import ProjectsSection from './components/ProjectsSection.vue';
  import SkillsSection from './components/SkillsSection.vue';
  import CourseExperience from './components/CourseExperience.vue';
  import ContactSection from './components/ContactSection.vue';
  import CertificationSection from './components/CertificationSection.vue';
  import Footer from './components/Footer.vue';

  const particlesLoaded = async container => {
    console.log('Particles container loaded', container);
  };
</script>

