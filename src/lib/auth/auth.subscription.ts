import { checkRouteAccess } from '$config/checkRouteAccess'
import { user } from '$lib/store/user.store'
import type { RouteLocation } from '$types/props-anchor.types'
import type { User } from '$types/user.types'

export const authSubscription = (location: RouteLocation): void => {
  user.subscribe((userValue: User | null) => {
    checkRouteAccess(userValue, location.pathname ?? '/')
  })
}
