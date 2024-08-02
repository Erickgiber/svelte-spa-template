<script lang="ts">
  import { onMount } from 'svelte'
  import { useLocation } from 'svelte-routing'
  import { authSubscription } from '$lib/auth/auth.subscription'

  const location = useLocation()
  let isLoaded = false

  $: if (isLoaded) {
    authSubscription($location)
  }

  onMount(() => {
    isLoaded = true
  })
</script>

<slot />
