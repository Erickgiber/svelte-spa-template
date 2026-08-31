import path from 'path'
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

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
