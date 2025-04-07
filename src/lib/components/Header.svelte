<script lang="ts">
  import { user } from '$lib/store/user.store'
  import NavLink from './NavLink.svelte'
  import IconGithub from './IconGithub.svelte'
  import { useLocation } from 'svelte-routing'
  const location = useLocation()
  let hiddeHeader = $derived($location.pathname === '/logout')
</script>

<header id="header" class:hidden={hiddeHeader}>
  <a class="link-repo" href="https://github.com/Erickgiber/svelte-spa-template">
    <IconGithub />
    <span>Github</span>
  </a>
  {#if $user}
    <NavLink to="/logout" class="link-logout">
      <span>Logout</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
        />
      </svg>
    </NavLink>
  {/if}
</header>

<style lang="scss">
  #header {
    height: var(--header-height);
    padding: 10px 20px;
    background-color: rgba(32, 1, 46, 0.11);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 1s;

    &.hidden {
      transform: translateY(-100%);
    }

    .link-repo {
      width: max-content;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      transition: all 0.1s;

      &:hover {
        scale: 0.95;
      }
    }

    :global(.link-logout) {
      align-items: center;
      text-decoration: none;
      color: white;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
</style>
