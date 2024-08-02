<script lang="ts">
  import { app } from '$config/app.config'
  import { user } from '$lib/store/user.store'
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'
  import './Login.scss'

  export let title: string
  let isLoaded = false
  let name: string = ''

  function handleSubmit(e: Event) {
    user.set({ name })
    navigate('/', { replace: true })
    localStorage.setItem('name', name)
  }

  onMount(() => {
    isLoaded = true
  })
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

<section id="login">
  {#if isLoaded}
    <h1
      transition:scale={{ duration: 1600, easing: quintOut, start: 0.95, opacity: 0 }}
      class="title"
    >
      Hello and welcome!
    </h1>
    <h2
      transition:scale={{ delay: 50, duration: 1600, easing: quintOut, start: 0.95, opacity: 0 }}
      class="subtitle"
    >
      Type your name for login
    </h2>
  {/if}

  {#if isLoaded}
    <form
      id="form"
      autocomplete="off"
      on:submit|preventDefault={handleSubmit}
      transition:scale={{ duration: 1600, easing: quintOut, start: 0.95, opacity: 0, delay: 200 }}
    >
      <div class="input-container">
        <label class:label-animation={name} for="name"> Name </label>
        <input
          placeholder="My name is..."
          bind:value={name}
          class="input"
          type="text"
          name="name"
          id="name"
          maxlength="20"
        />
      </div>
      <div class="buttons">
        <button class="btn-submit" type="submit">Login</button>
        <button class="btn-clear" type="reset" on:click={() => (name = '')}>Clear</button>
      </div>
    </form>
  {/if}
</section>
