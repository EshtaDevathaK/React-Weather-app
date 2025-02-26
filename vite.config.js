export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Keep this for local
    strictPort: true,
    host: '0.0.0.0',
  },
  preview: {
    port: process.env.PORT || 3000, // Ensure it binds to Render's assigned port
    strictPort: true,
    host: '0.0.0.0',
  },
});
