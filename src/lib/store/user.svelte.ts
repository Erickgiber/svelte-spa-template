import { browser } from '$app/environment'
import type { UserStateValue } from '$types/user.types'

const STORAGE_KEY = 'name'

function getInitialUser(): UserStateValue {
  if (!browser) return null
  const storedName = localStorage.getItem(STORAGE_KEY)
  return storedName ? { name: storedName } : null
}

class UserState {
  current = $state<UserStateValue>(getInitialUser())

  get isAuthenticated(): boolean {
    return this.current !== null
  }

  login(name: string) {
    const trimmed = name.trim()
    if (!trimmed) return
    this.current = { name: trimmed }
    if (browser) {
      localStorage.setItem(STORAGE_KEY, trimmed)
    }
  }

  logout() {
    this.current = null
    if (browser) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }
}

export const userState = new UserState()
