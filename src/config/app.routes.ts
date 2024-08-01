export const appRoutes = [
  {
    path: '/login',
    component: () => import('$pages/public/Login.svelte'),
    private: false,
    title: 'Login'
  },
  {
    path: '/',
    component: () => import('$pages/private/Dashboard.svelte'),
    private: true,
    title: 'Dashboard'
  }
]
