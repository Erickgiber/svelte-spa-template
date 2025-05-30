<script lang="ts">
  import { goto } from '$app/navigation'
  import { user } from '$lib/store/user.store'
  import { onMount } from 'svelte'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'

  let { title } = $props<{ title: string }>()
  let isLoaded = $state(false)
  let name: string = $state('')

  function handleSubmit(e: Event) {
    e.preventDefault()
    if (!name) return
    user.set({ name })
    goto('/', { replace: true })
    localStorage.setItem('name', name)
  }

  onMount(() => {
    isLoaded = true
  })
</script>

<svelte:head>
  <title>{title} | APPNAME</title>
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

<style lang="scss">
  @mixin label-animation {
  top: -30px;
  left: 10px;
  font-size: 18px;
  color: white;
  transition: all 0.6s;
}

.input-label {
  color: rgba(255, 255, 255, 0.521);
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  cursor: text;
  top: 12px;
  left: 15px;
  transition: all 0.5s;
}

.input {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  padding-bottom: 0;
  border: none;
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.521);
  padding: 10px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 16px;
  transition: all 1s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.521);
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.2s;
    user-select: none;
  }
}

.btn {
  border-radius: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  font-family: inherit;
  width: max-content;
  cursor: pointer;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0);
  transition: all 0.3s;
}

#login {
  display: flex;
  height: calc(100vh - var(--header-height));
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 50px 20px;

  .title {
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.527);

    @media (width < 768px) {
      text-align: center;
    }
  }

  .subtitle {
    @extend .title;
    font-size: 1.5rem;
  }

  #form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    max-width: 450px;
    background-color: #bd7b7b27;
    border-radius: 30px;
    padding: 40px 20px;
    padding-bottom: 20px;
    margin-top: 60px;

    .input-container {
      display: flex;
      gap: 5px;
      position: relative;

      &:hover,
      &:focus-within {
        label {
          @include label-animation;
        }

        .input {
          border-color: white;

          &::placeholder {
            opacity: 1;
            transform: none;
            transition: all 0.6s;
          }
        }
      }

      label {
        @extend .input-label;

        &.label-animation {
          @include label-animation;
        }
      }

      .input {
        @extend .input;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      .btn-submit {
        @extend .btn;
        background-color: rgba(82, 20, 20, 0.377);

        &:hover,
        &:focus {
          box-shadow: 0 0 3px 1px rgba(255, 146, 73, 0.5);
        }
      }

      .btn-clear {
        @extend .btn;
        background-color: rgba(231, 182, 182, 0.377);

        &:hover,
        &:focus {
          box-shadow: 0 0 3px 1px rgba(65, 32, 10, 0.527);
        }
      }
    }
  }
}
</style>