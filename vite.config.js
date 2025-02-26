import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Fallback for local testing
    strictPort: true, // Ensures it binds only to the given port
    host: '0.0.0.0',  // Allows external access (important for Render)
  },
  preview: {
    port: process.env.PORT || 3000,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['react-weather-app-v456.onrender.com'], // Replace with your actual Render domain
  },
});







