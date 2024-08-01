<script lang="ts">
  import { app } from '$config/app.config'
  import Anchor from '$lib/components/Anchor.svelte'
  import HandleRoute from '$lib/components/HandleRoute.svelte'
  import { Router, Link, Route, useLocation, links } from 'svelte-routing'
</script>

<Router>
  <Anchor to="/login">Login</Anchor>
  <Anchor to="/">Dashboard</Anchor>

  <HandleRoute>
    {#each app.routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </HandleRoute>
</Router>
