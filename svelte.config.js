import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default {
  preprocess: vitePreprocess({
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    },
    scss: true
  }),
  kit: {
    adapter: adapter()
  }
}
