import { appRoutes } from './app.routes'

export const app = {
  name: 'Template Svelte SPA',
  subtitle: 'A template for a simple SPA built with Svelte and Vite',
  logo: 'https://avatars.githubusercontent.com/u/10127379?v=4',
  routes: appRoutes,
  colors: {
    primary: '#007AFF',
    secondary: '#FF3E00',
    tertiary: '#FFA800',
    quaternary: '#41D1FF',
    quinary: '#BD34FE'
  },
  useAuthSecurity: false,
}
