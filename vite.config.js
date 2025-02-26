import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    strictPort: true,
    host: '0.0.0.0',
  },
  preview: {
    port: process.env.PORT || 3000,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['react-weather-app-v456.onrender.com'], // Add your Render domain here
  },
});
