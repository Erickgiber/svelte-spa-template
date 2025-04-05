<script lang="ts">
  import { onMount } from 'svelte'
  import { useLocation } from 'svelte-routing'
  import { authSubscription } from '$lib/auth/auth.subscription'

  let { children } = $props()

  const location = useLocation()
  let isLoaded = $state(false)

  $effect(() => {
    if (isLoaded) {
      authSubscription($location)
    }
  })

  onMount(() => {
    isLoaded = true
  })
</script>

{@render children()}
