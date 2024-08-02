import { writable } from 'svelte/store'
import type { User } from 'types/user.types'

const storage = localStorage.getItem('name')

export const user = writable<User>(storage ? { name: storage } : null)
