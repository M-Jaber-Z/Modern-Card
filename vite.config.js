import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base:'/Modern-Card/',
=======
  base: 'Modern-Card',
>>>>>>> 2fe54c83b9ea5ff035b13d32c596f47e680b5dbf
  server: {
    port: 3000
  }
})

