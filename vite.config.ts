import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      views: '/src/views',
      components: '/src/components'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://47.116.26.11:8096/api/',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
