import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, 'src/lib'),
      $assets: path.resolve(__dirname, 'src/assets'),
      $pages: path.resolve(__dirname, 'src/pages'),
      $config: path.resolve(__dirname, 'src/config'),
      $types: path.resolve(__dirname, 'src/types')
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
})
