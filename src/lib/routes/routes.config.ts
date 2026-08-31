import type { RouteConfig } from '$types/routes.types'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  LOGOUT: '/logout'
} as const

export const DEFAULT_AUTH_REDIRECT = ROUTES.DASHBOARD
export const DEFAULT_UNAUTH_REDIRECT = ROUTES.LOGIN

export const APP_ROUTES: RouteConfig[] = [
  { path: ROUTES.LOGIN, access: 'guest' },
  { path: ROUTES.DASHBOARD, access: 'private' },
  { path: ROUTES.LOGOUT, access: 'private', preserveRedirect: false }
]
