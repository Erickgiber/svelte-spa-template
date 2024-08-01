<script lang="ts">
  import { appRoutes } from '$config/app.routes';
  import Anchor from '$lib/components/Anchor.svelte';
  import HandleRoute from '$lib/components/HandleRoute.svelte';
  import { Router, Link, Route, useLocation, links } from 'svelte-routing';
</script>

<Router>
  <Anchor to="/login">Login</Anchor>
  <Anchor to="/">Dashboard</Anchor>

  <HandleRoute>
    {#each appRoutes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </HandleRoute>
</Router>
