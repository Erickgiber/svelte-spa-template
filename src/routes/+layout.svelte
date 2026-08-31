<script lang="ts">
  import '../app.scss'
  import type { Snippet } from 'svelte'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import RouteGuard from '$lib/components/RouteGuard.svelte'

  let { children }: { children: Snippet } = $props()
</script>

<Header />
<main>
  <RouteGuard>
    {@render children()}
  </RouteGuard>
</main>
<Footer />
