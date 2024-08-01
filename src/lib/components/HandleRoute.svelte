<script lang="ts">
  import { checkRouteAccess } from '$config/checkRouteAccess'
  import { user } from '$lib/store/user.store'
  import { onMount, onDestroy } from 'svelte'
  import { navigate, useLocation } from 'svelte-routing'
  import type { User } from 'types/user.types'

  const location = useLocation()
  let isLoaded = false

  $: if (isLoaded) {
    user.subscribe((userValue: User | null) => {
      checkRouteAccess(userValue, $location.pathname ?? '/')
    })
  }

  onMount(() => {
    isLoaded = true
  })
</script>

<slot />
