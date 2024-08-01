<script lang="ts">
  import { user } from '$lib/store/user.store';
</script>

{#if $user}
  <slot />
{/if}
