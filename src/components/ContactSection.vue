<template>

  <section id="contact" class="py-5" data-aos="fade-up">

    <div class="container">

      <h2 class="text-center mb-5 gradient-text">Hubungi Saya</h2>

      <!-- Notifikasi -->

      <div v-if="showSuccess" class="glass-alert text-center mb-4">
         Pesan berhasil dikirim!
      </div>

      <div class="glass p-5 rounded">

        <form
          :action="formAction"
          method="POST"
          @submit="handleSubmit"
          ref="formRef"
        >

          <div class="row">

            <div class="col-md-6 mb-3">

              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Nama"
                required
              />

            </div>

            <div class="col-md-6 mb-3">

              <input
                type="email"
                name="_replyto"
                class="form-control"
                placeholder="Email"
                required
              />

            </div>

          </div>

          <div class="mb-3">

            <input
              type="text"
              name="subject"
              class="form-control"
              placeholder="Subjek Pesan"
              required
            />

          </div>

          <div class="mb-3">

            <textarea
              name="message"
              class="form-control"
              rows="5"
              placeholder="Pesan"
              required
            ></textarea>

          </div>

          <!-- Honeypot Field -->

          <input
            type="text"
            name="_honey"
            style="display: none"
            tabindex="-1"
            autocomplete="off"
          />

          <button
            type="submit"
            class="btn btn-gradient w-100 d-flex justify-content-center align-items-center"
            :disabled="isLoading"
          >

            <span v-if="!isLoading">Kirim Pesan</span>

            <span v-else>

              <span
                class="spinner-border spinner-border-sm text-light me-2"
                role="status"
                aria-hidden="true"
              ></span>
               Mengirim...
            </span>

          </button>

        </form>

      </div>

    </div>

  </section>

</template>

<script setup>
  import { ref, onMounted } from 'vue';

  const isLoading = ref(false);
  const formRef = ref(null);
  const formAction = 'https://formspree.io/f/mnnpryzv';
  const showSuccess = ref(false);

  const handleSubmit = e => {
    isLoading.value = true;
    localStorage.setItem('formSubmitted', 'true');

    setTimeout(() => {
      formRef.value.submit();
    }, 500);
  };

  onMounted(() => {
    window.addEventListener('pageshow', () => {
      isLoading.value = false;

      if (localStorage.getItem('formSubmitted')) {
        showSuccess.value = true;
        localStorage.removeItem('formSubmitted');
        setTimeout(() => {
          showSuccess.value = false;
        }, 4000);
      }
    });
  });
</script>

<style scoped>
  input.form-control::placeholder,
textarea.form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
  opacity: 1;
}

.glass .form-control {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass .form-control:focus {
  background-color: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.25);
}

.spinner-border {
  width: 1rem;
  height: 1rem;
}

.glass-alert {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Animasi notifikasi */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

