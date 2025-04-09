import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { sveltekit } from '@sveltejs/kit/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
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
