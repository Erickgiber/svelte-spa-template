<script lang="ts">
  import { app } from '$config/app.config'

  export let title: string
</script>

<svelte:head>
  <title>{title} | {app.name}</title>
</svelte:head>

<section class="w-full px-10 flex flex-col justify-center items-center" style="height: calc(100vh - var(--header-height) - 64px)">
  <h1 class="text-3xl font-bold mx-auto text-white">Hello world!</h1>
  <h2 class="text-3xl font-bold mx-auto text-white text-opacity-90">With Tailwind CSS</h2>
</section>
