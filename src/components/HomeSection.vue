<template>

  <section
    id="home"
    class="position-relative d-flex align-items-center min-vh-100"
    data-aos="fade-in"
  >

    <div class="container position-relative">

      <div class="row align-items-center">

        <div
          class="col-lg-6 text-center text-lg-start mb-4 mb-lg-0 mt-5 mt-lg-0"
          data-aos="fade-right"
        >

          <h1 class="display-3 mb-3">

            <span class="gradient-text fw-bold">{{ typedText }}</span>

          </h1>

          <p class="lead introduction-text fw-medium fs-6">
             Fresh Graduate Jurusan Sistem Informasi Sarjana 2024
          </p>

          <div
            class="social-icons mt-3 d-flex justify-content-center justify-content-lg-start gap-3"
          >

            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
            >

              <i :class="[social.iconClass, 'social-icon']"></i>

            </a>

          </div>

          <a href="#projects" class="btn btn-gradient fw-medium btn-lg mt-4">
            Lihat Proyek Saya
          </a>

        </div>

        <div class="col-lg-6 text-center" data-aos="fade-left">

          <div class="glass p-2 rounded-circle d-inline-block">

            <img
              src="/images/profile-picture-ai.png"
              alt="Foto Profil"
              class="img-fluid rounded-circle profile-img"
            />

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const typedText = ref('');
  const fullText = 'Halo, Saya Muhammad Luthfi Wahid';
  let currentIndex = 0;
  let typingInterval = null;

  const typeText = () => {
    if (currentIndex < fullText.length) {
      typedText.value = fullText.slice(0, currentIndex + 1);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  };

  onMounted(() => {
    typingInterval = setInterval(typeText, 100);
  });

  onUnmounted(() => {
    clearInterval(typingInterval);
  });

  const socialLinks = ref([
    {
      name: 'GitHub',
      url: 'https://github.com/Mhmmadlthfi',
      iconClass: 'fab fa-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-lutfi-wahid-a86805265',
      iconClass: 'fab fa-linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mhmmadlthfi_',
      iconClass: 'fab fa-instagram',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/luthfimhmmad',
      iconClass: 'fab fa-facebook',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/MhmmadLthfi',
      iconClass: 'fa-brands fa-x-twitter',
    },
  ]);
</script>

<style scoped>
  .container {
  z-index: 2;
}

.profile-img {
  max-width: 250px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(24, 127, 245, 0.4);
}

.social-icon {
  font-size: 28px;
  color: #39e3fa;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #f2f9ff;
}

@media (max-width: 991px) {
  .profile-img {
    max-width: 200px;
  }
}
</style>

