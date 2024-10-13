<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
  import RouteAuthGuard from '$lib/components/RouteAuthGuard.svelte'
  import RouterProvider from '$lib/components/RouterProvider.svelte'
  import { isArrayEmpty } from '$lib/utils/isArrayEmpty'
  import { Router, Route } from 'svelte-routing'
  import { app } from '$config/app.config'
  import './app.scss'
</script>

<Router>
  <Header />

  <!-- * If not need to use the router protector, you can remove RouterProvider and use <Route> component normally -->
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

      {#if route.children && !isArrayEmpty(route.children)}
        {#each route.children as child}
          <Route path={route.path + child.path}>
            {#if child.private}
              <RouteAuthGuard>
                <svelte:component this={child.component} {...child.props} />
              </RouteAuthGuard>
            {:else}
              <svelte:component this={child.component} {...child.props} />
            {/if}
          </Route>

          {#if child.children && !isArrayEmpty(child.children)}
            {#each child.children as childLower}
              <Route path={route.path + child.path + childLower.path}>
                {#if child.private}
                  <RouteAuthGuard>
                    <svelte:component this={childLower.component} {...childLower.props} />
                  </RouteAuthGuard>
                {:else}
                  <svelte:component this={childLower.component} {...childLower.props} />
                {/if}
              </Route>
            {/each}
          {/if}
        {/each}
      {/if}
    {/each}
  </RouterProvider>
  <Footer />
</Router>
