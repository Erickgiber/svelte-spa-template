<script lang="ts">
  import Loader from '$lib/components/Loader.svelte'
  import { onMount } from 'svelte'
  import { scale } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { app } from '$config/app.config'
  import { user } from '$lib/store/user.store'
  import './Logout.scss'

  export let title: string
  let isLoaded = false

  onMount(() => {
    isLoaded = true
    sessionStorage.removeItem('loaded')

    setTimeout(() => {
      localStorage.removeItem('name')
      user.set(null)
    }, 2500)
  })
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
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
