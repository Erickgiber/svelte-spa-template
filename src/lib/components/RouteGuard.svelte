<script lang="ts">
  import type { Snippet } from 'svelte'
  import { page } from '$app/state'
  import { goto } from '$app/navigation'
  import { userState } from '$lib/store/user.svelte'
  import { evaluateRouteAccess } from '$lib/routes/route-guard'
  import Loader from '$lib/components/Loader.svelte'

  let { children }: { children: Snippet } = $props()

  const accessResult = $derived(evaluateRouteAccess(page.url.pathname, userState.isAuthenticated))

  $effect(() => {
    if (!accessResult.allowed && accessResult.redirectTo) {
      goto(accessResult.redirectTo, { replaceState: true })
    }
  })
</script>

{#if accessResult.allowed}
  {@render children()}
{:else}
  <Loader />
{/if}
