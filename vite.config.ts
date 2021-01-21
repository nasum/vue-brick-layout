import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib', 'main.ts'),
      name: 'VueBrickLayout'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
