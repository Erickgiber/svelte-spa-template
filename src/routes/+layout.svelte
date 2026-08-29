<script lang="ts">
  import '../app.scss'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { page } from '$app/state'
  import { goto } from '$app/navigation'
  import { user } from '$lib/store/user.store'

  let { children } = $props()

  let isAuthorized = $derived.by(() => {
    const pathname = page.url.pathname
    const isPrivate = pathname.startsWith('/dashboard') || pathname.startsWith('/logout')

    if (pathname === '/') return false
    if (isPrivate && !$user) return false
    if (pathname === '/login' && $user) return false

    return true
  })

  $effect(() => {
    const pathname = page.url.pathname
    const currentUser = $user

    if (pathname === '/') {
      goto(currentUser ? '/dashboard' : '/login', { replaceState: true })
      return
    }

    const isPrivate = pathname.startsWith('/dashboard') || pathname.startsWith('/logout')

    if (!currentUser && isPrivate) {
      goto('/login', { replaceState: true })
    } else if (currentUser && pathname === '/login') {
      goto('/dashboard', { replaceState: true })
    }
  })
</script>

<Header />
<main>
  {#if isAuthorized}
    {@render children()}
  {/if}
</main>
<Footer />
