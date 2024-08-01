import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.NODE_ENV === 'production' ? '/svelte-app-template/' : '/',
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, 'src/lib'),
      $assets: path.resolve(__dirname, 'src/assets'),
      $pages: path.resolve(__dirname, 'src/pages'),
      $config: path.resolve(__dirname, 'src/config'),
      $types: path.resolve(__dirname, 'src/types')
    }
  }
})
