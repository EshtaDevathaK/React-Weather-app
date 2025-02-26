import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173,  // Use Render's assigned port or default to 4173
    host: '0.0.0.0'  // Ensure it listens on all interfaces
  }
})








