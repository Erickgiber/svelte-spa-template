<script lang="ts">
  import { app } from '$config/app.config'
  import Footer from '$lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
  import RouteAuthGuard from '$lib/components/RouteAuthGuard.svelte'
  import RouterProvider from '$lib/components/RouterProvider.svelte'
  import { Router, Route } from 'svelte-routing'
</script>

<Router>
  <Header />

  <!-- If not need to use the router protector, you can remove RouterProvider and use <Route> component normally -->
  <RouterProvider>
    {#each app.routes as route}
      <Route path={route.path}>
        {#if route.private}
          <RouteAuthGuard>
            <svelte:component this={route.component} {...route.props} />
          </RouteAuthGuard>
        {:else}
          <svelte:component this={route.component} {...route.props} />
        {/if}
      </Route>
    {/each}
  </RouterProvider>

  <Footer />
</Router>
