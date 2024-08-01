<script lang="ts">
  import SecureRoute from '$lib/components/SecureRoute.svelte';
</script>

<SecureRoute>
  <section>
    <h1>Dashboard</h1>
    <h2>Welcome to the dashboard!</h2>
  </section>
</SecureRoute>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
