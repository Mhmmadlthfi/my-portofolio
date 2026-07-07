1. **Untuk Aset Statis di dalam Template HTML/Vue (tanpa v-bind):**
   Aman menggunakan path absolut jika didefinisikan secara statis di HTML, karena Vite akan memprosesnya.
   ```html
   <!-- BENAR: Vite akan otomatis menambahkan prefix /my-portofolio/ -->
   <img src="/images/logo.png" />
   ```

2. **Untuk Aset Statis yang Dibinding Melalui Javascript (Script Setup):**
   **DILARANG** menggunakan string absolut secara langsung.
   ```javascript
   // SALAH: Akan menyebabkan 404 di gh-pages
   const logo = '/images/logo.png' 
   ```
   **BENAR:** Gunakan selalu `import.meta.env.BASE_URL` untuk file di folder `public`.
   ```javascript
   // BENAR: Path akan otomatis menyesuaikan environment
   const logo = `${import.meta.env.BASE_URL}images/logo.png`
   ```

3. **Untuk Aset Dinamis di Folder `src/assets/`:**
   Jika aset berada di folder `src`, Anda harus menggunakan sintaks Import Javascript.
   ```javascript
   // BENAR: Vite akan membundling file ini dengan hash untuk caching
   import myIcon from '../assets/icon.svg'
   ```