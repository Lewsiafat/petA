import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      customElement: /\.ce\.vue$/,
    }),
  ],
  build: {
    lib: {
      entry: 'src/entry.ce.ts',
      name: 'BuddyPet',
      fileName: (format) => `buddy-pet.${format}.js`,
      formats: ['es', 'umd'],
    },
  },
})
