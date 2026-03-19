import { redirect } from '@sveltejs/kit'
import { get } from 'svelte/store'
import { user } from '$lib/store/user.store'

export const load = () => {
  throw redirect(307, get(user) ? '/dashboard' : '/login')
}
