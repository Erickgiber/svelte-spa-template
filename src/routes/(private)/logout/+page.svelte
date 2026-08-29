<script lang="ts">
  import Loader from '$lib/components/Loader.svelte'
  import { onMount } from 'svelte'
  import { scale } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { user } from '$lib/store/user.store'
  import { goto } from '$app/navigation'

  let { title = 'Logout' } = $props<{ title?: string }>()
  let isLoaded = $state(false)

  onMount(() => {
    isLoaded = true
    sessionStorage.removeItem('loaded')

    const timeout = setTimeout(() => {
      user.set(null)
      goto('/login', { replaceState: true })
    }, 2500)

    return () => clearTimeout(timeout)
  })
</script>

<svelte:head>
  <title>{title} | Template Svelte SPA</title>
</svelte:head>

<section id="logout">
  {#if isLoaded}
    <h1
      transition:scale={{ duration: 1300, easing: quintOut, start: 0.95, opacity: 0, delay: 100 }}
      class="title"
    >
      {title}
    </h1>
  {/if}
  <Loader />
</section>

<style lang="scss">
  #logout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 50px 20px;

    .title {
      font-size: 2rem;
      color: white;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.527);
      margin-bottom: 50px;
    }
  }
</style>
