import { navigate } from 'svelte-routing'
import type { User } from 'types/user.types'
import { app } from './app.config'

export const checkRouteAccess = (user: User, currentRoute: string) => {
  const route = app.routes.find((route) => route.path === currentRoute)

  if (route) {
    if (!user && route.private && route.path !== '/login') {
      navigate('/login', { replace: true })
    } else if (user && !route.private) {
      navigate('/', { replace: true })
    }
  }
}
