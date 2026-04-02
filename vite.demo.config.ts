import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Demo/playground build config (static site, not library)
export default defineConfig({
  plugins: [
    vue({
      customElement: /\.ce\.vue$/,
    }),
  ],
  base: '/pet-a/',
  build: {
    outDir: 'dist-demo',
  },
})
