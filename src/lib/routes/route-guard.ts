import type { RouteAccessResult, RouteConfig } from '$types/routes.types'
import { APP_ROUTES, DEFAULT_AUTH_REDIRECT, DEFAULT_UNAUTH_REDIRECT, ROUTES } from './routes.config'

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

export function findRouteConfig(pathname: string): RouteConfig | undefined {
  const normalized = normalizePath(pathname)
  return APP_ROUTES.find(
    (route) => normalized === route.path || normalized.startsWith(`${route.path}/`)
  )
}

export function evaluateRouteAccess(pathname: string, isAuthenticated: boolean): RouteAccessResult {
  const normalized = normalizePath(pathname)

  if (normalized === ROUTES.HOME) {
    return {
      allowed: false,
      redirectTo: isAuthenticated ? DEFAULT_AUTH_REDIRECT : DEFAULT_UNAUTH_REDIRECT
    }
  }

  const route = findRouteConfig(normalized)
  if (!route) {
    return { allowed: true }
  }

  if (route.access === 'private') {
    if (!isAuthenticated) {
      if (route.preserveRedirect === false || normalized === ROUTES.LOGOUT) {
        return {
          allowed: false,
          redirectTo: DEFAULT_UNAUTH_REDIRECT
        }
      }

      // Preserve target route so login can redirect back after authentication
      const redirectParam = encodeURIComponent(normalized)
      return {
        allowed: false,
        redirectTo: `${DEFAULT_UNAUTH_REDIRECT}?redirect=${redirectParam}`
      }
    }
    return { allowed: true }
  }

  if (route.access === 'guest') {
    if (isAuthenticated) {
      return {
        allowed: false,
        redirectTo: DEFAULT_AUTH_REDIRECT
      }
    }
    return { allowed: true }
  }

  return { allowed: true }
}
