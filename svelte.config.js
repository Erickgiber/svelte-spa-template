import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import dotenv from 'dotenv'

dotenv.config()

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.GH_PAGES_BUILD ? '/svelte-spa-template' : ''
    }
  }
}
