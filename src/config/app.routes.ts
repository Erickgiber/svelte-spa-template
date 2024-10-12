import Login from '$pages/public/Login/Login.svelte'
import Dashboard from '$pages/private/Dashboard/Dashboard.svelte'
import Logout from '$pages/private/Logout/Logout.svelte'
import type { TypeRoute } from '$types/routes.types'

export const appRoutes: TypeRoute[] = [
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
  },
  {
    path: '/logout',
    component: Logout,
    private: true,
    props: {
      title: 'Logging out...'
    }
  }
]
