<script lang="ts">
  import { app } from '$config/app.config'
  import NavLink from '$lib/components/NavLink.svelte'
  import { user } from '$lib/store/user.store'
  import { onDestroy, onMount } from 'svelte'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'

  let { title } = $props<{ title: string }>()
  const isLoadedSession = sessionStorage.getItem('loaded')
  let isLoaded = $state(false)

  onMount(() => {
    isLoaded = true
    sessionStorage.setItem('loaded', 'true')
  })
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

{#if isLoaded}
  <section id="dashboard">
    <h1
      transition:scale={{
        duration: isLoadedSession ? 0 : 1600,
        easing: quintOut,
        start: 0.95,
        opacity: 0
      }}
      class="title"
    >
      {$user?.name}
    </h1>
    <h2
      transition:scale={{
        delay: isLoadedSession ? 0 : 50,
        duration: isLoadedSession ? 0 : 1600,
        easing: quintOut,
        start: 0.95,
        opacity: 0
      }}
      class="subtitle"
    >
      Welcome to the dashboard!
    </h2>

    <span
      class="try"
      transition:scale={{
        delay: isLoadedSession ? 0 : 200,
        duration: isLoadedSession ? 0 : 1600,
        easing: quintOut,
        start: 0.95,
        opacity: 0
      }}
    >
      Try go to auth route and see the protected route
    </span>

    <div
      class="buttons"
      transition:scale={{
        delay: isLoadedSession ? 0 : 400,
        duration: isLoadedSession ? 0 : 1600,
        easing: quintOut,
        start: 0.95,
        opacity: 0
      }}
    >
      <NavLink to="/login" class="link-login">Login</NavLink>
    </div>
  </section>
{/if}

<style lang="scss">
  #dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 50px 20px;

    .title {
      font-size: 3rem;
      color: white;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.527);
      max-width: 500px;
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        background-color: rgba(83, 15, 15, 0.219);
        height: 6px;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
      }
    }

    .subtitle {
      @extend .title;
      font-size: 1.5rem;
    }

    .try {
      background-color: rgba(255, 255, 255, 0.171);
      padding: 5px 10px;
      border-radius: 5px;
      color: white;
    }

    :global(.link-login) {
      text-decoration: none;
      background-color: white;
      padding: 5px 10px;
      border-radius: 5px;
      color: #202020;
      gap: 5px;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 40px;
      font-size: 20px;
    }
  }
</style>
