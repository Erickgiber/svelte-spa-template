<script lang="ts">
  import { app } from '$config/app.config'
  import Anchor from '$lib/components/Anchor.svelte'
  import RouteAuthGuard from '$lib/components/RouteAuthGuard.svelte'
  import RouterProvider from '$lib/components/RouterProvider.svelte'
  import { Router, Route } from 'svelte-routing'

  const url = import.meta.env.MODE === 'development' ? '' : (import.meta.env.BASE_PATH || '/svelte-spa-template')
</script>

<Router basepath={url}>
  <Anchor to="/login">Login</Anchor>
  <Anchor to="/">Dashboard</Anchor>

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
</Router>
