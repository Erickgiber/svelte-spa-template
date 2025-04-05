<script lang="ts">
  import { user } from '$lib/store/user.store'

  let { children } = $props()
</script>

{#if $user}
  {@render children()}
{/if}
