<script lang="ts">
  import { onMount } from 'svelte'
  import { useLocation } from 'svelte-routing'
  import { authSubscription } from '$lib/auth/auth.subscription'
  import { app } from '$config/app.config'
  
  const location = useLocation()
  let isLoaded = false

  $: if (isLoaded && app.useAuthSecurity) {
    authSubscription($location)
  }

  onMount(() => {
    isLoaded = true
  })
</script>

<slot />
