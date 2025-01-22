import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // هذا مهم للنشر على GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});