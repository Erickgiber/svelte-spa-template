// src/routes/+layout.ts
import { get } from 'svelte/store'
import { user } from '$lib/store/user.store'
import { goto } from '$app/navigation'

export const ssr = false
export const load = ({ url }) => {
  const path = url.pathname
  const currentUser = get(user)

  // Definí las rutas privadas directamente acá
  const isPrivate = path.startsWith('/dashboard') || path.startsWith('/logout')

  if (!currentUser && isPrivate) {
    goto('/login')
  }

  if (currentUser && path === '/login') {
    goto('/dashboard')
  }

  return {}
}
