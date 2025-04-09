import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import type { User } from '$types/user.types'

const stored = browser ? localStorage.getItem('name') : null
const initial = stored ? { name: stored } : null

export const user = writable<User | null>(initial)

user.subscribe((value) => {
  if (browser) {
    if (value) localStorage.setItem('name', value.name)
    else localStorage.removeItem('name')
  }
})
