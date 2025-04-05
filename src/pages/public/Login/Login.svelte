<script lang="ts">
  import { app } from '$config/app.config'
  import { user } from '$lib/store/user.store'
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'
  import './Login.scss'

  let { title } = $props<{ title: string }>()
  let isLoaded = $state(false)
  let name: string = $state('')

  function handleSubmit(e: Event) {
    e.preventDefault()
    if (!name) return
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

{#if isLoaded}
  <section id="login">
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

    <form
      id="form"
      autocomplete="off"
      onsubmit={handleSubmit}
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
          required
        />
      </div>
      <div class="buttons">
        <button class="btn-submit" type="submit">Login</button>
        <button class="btn-clear" type="reset" onclick={() => (name = '')}>Clear</button>
      </div>
    </form>
  </section>
{/if}
