import Home from '$pages/public/Home/Home.svelte'
import type { TypeRoute } from '$types/routes.types'

export const appRoutes: TypeRoute[] = [
  {
    path: '/',
    component: Home,
    private: false,
    props: {
      title: 'Home'
    }
  }
]
