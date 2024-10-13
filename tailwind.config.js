/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte,scss}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right top, #300537, #6b0546, #a31a45, #d04436, #eb7912)'
      }
    }
  },
  plugins: []
}
