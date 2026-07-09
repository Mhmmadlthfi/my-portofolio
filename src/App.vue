<template>
  <div id="app" class="bg-dark relative overflow-hidden">
    <div class="fixed top-[40%] left-[-10%] w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
    
    <div class="relative z-10">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationSection />
      <CourseExperience />
      <Footer />
    </div>
  </div>
</template>

<!-- <template> -->
  <!-- <div id="app" class="bg-dark"> -->
    <!-- <Navbar /> -->
    <!-- <HomeSection /> -->
    <!-- <AboutSection /> -->
    <!-- <EducationSection /> -->
    <!-- <ExperienceSection /> -->
    <!-- <ProjectsSection /> -->
    <!-- <SkillsSection /> -->
    <!-- <CourseExperience /> -->
    <!-- <CertificationSection /> -->
    <!-- <ContactSection /> -->
    <!-- <Footer /> -->
  <!-- </div> -->
<!-- </template> -->

<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Navbar.vue';
  import HomeSection from './components/HomeSection.vue';
  import AboutSection from './components/AboutSection.vue';
  // import EducationSection from './components/EducationSection.vue';
  import ExperienceSection from './components/ExperienceSection.vue';
  import ProjectsSection from './components/ProjectsSection.vue';
  // import SkillsSection from './components/SkillsSection.vue';
  import CourseExperience from './components/CourseExperience.vue';
  import ContactSection from './components/ContactSection.vue';
  import CertificationSection from './components/CertificationSection.vue';
  import Footer from './components/Footer.vue';

  const particlesLoaded = async container => {
    console.log('Particles container loaded', container);
  };
</script>