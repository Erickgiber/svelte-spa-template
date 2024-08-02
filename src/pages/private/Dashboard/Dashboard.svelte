<script lang="ts">
  import { app } from '$config/app.config'
  import { user } from '$lib/store/user.store'
  export let title: string
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

<section id="dashboard">
  <h1 class="title">{$user?.name}</h1>
  <h2 class="subtitle">Welcome to the dashboard!</h2>

  <span>Try go to auth route and see the protected route</span>
</section>

<style lang="scss">
  #dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 50px 20px;

    .title,
    .subtitle {
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
      font-size: 1.5rem;
    }
  }
</style>
