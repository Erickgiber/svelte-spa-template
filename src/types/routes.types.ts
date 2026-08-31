export type RouteAccessType = 'public' | 'private' | 'guest'

export interface RouteConfig {
  path: string
  access: RouteAccessType
  title?: string
  redirectTo?: string
  preserveRedirect?: boolean
}

export interface RouteAccessResult {
  allowed: boolean
  redirectTo?: string
}
