<script lang="ts">
  import { app } from '$config/app.config'
  import { useLocation } from 'svelte-routing'
  export let title: string
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

<section>
  <h1>{title}</h1>
  <h2>Welcome to the dashboard!</h2>
</section>
