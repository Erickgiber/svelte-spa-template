import Login from '$pages/public/Login.svelte'
import Dashboard from '$pages/private/Dashboard.svelte'

export const appRoutes = [
  {
    path: '/login',
    component: Login,
    private: false,
    props: {
      title: 'Login'
    }
  },
  {
    path: '/',
    component: Dashboard,
    private: true,
    props: {
      title: 'Dashboard'
    }
  }
]
