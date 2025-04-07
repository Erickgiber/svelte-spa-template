<script lang="ts">
  import { onMount } from 'svelte'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'

  let isLoaded = $state(false)
  let translade = $state(false)

  onMount(() => {
    isLoaded = true

    setTimeout(() => {
      translade = true
    }, 100)
  })
</script>

{#if isLoaded}
  <section id="loader" class:translade>
    <div
      transition:scale={{ duration: 1600, easing: quintOut, start: 0.5, opacity: 0, delay: 100 }}
      class="lds-ring"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
{/if}

<style lang="scss">
  #loader {
    transition: all 1s;
    &.translade {
      transform: translateY(150px) scale(1.3);
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid white;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: white transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
