<script lang="ts">
  import { app } from '$config/app.config'
  import { user } from '$lib/store/user.store'
  import { navigate } from 'svelte-routing'

  export let title: string

  function handleSubmit(e: Event) {
    user.set({
      name: 'testing',
      lastname: 'Test',
      email: 'test.giber@gmail.com',
      photo: 'https://avatars.githubusercontent.com/u/10127379?v=4',
      username: 'test'
    })
    navigate('/', { replace: true })
  }
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />

  <label for="password">Password</label>
  <input type="password" name="password" id="password" />

  <button type="submit">Login</button>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
</style>
