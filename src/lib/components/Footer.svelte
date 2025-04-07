<script lang="ts">
  import { useLocation } from 'svelte-routing'

  const location = useLocation()
  let hiddeFooter = $derived($location.pathname === '/logout')
</script>

<footer id="footer" class:hidden={hiddeFooter}>
  <p>
    Made with ❤️ by <a href="https://github.com/erickgiber">Erickgiber</a>
  </p>
</footer>

<svg class:hidden={hiddeFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
  ><path
    fill="#fff"
    fill-opacity="0.7"
    d="M0,288L120,272C240,256,480,224,720,229.3C960,235,1200,277,1320,298.7L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
  ></path></svg
>

<style lang="scss">
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #300537;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 20px20px 0 0;
    z-index: 50;
    transition: all 1s;

    &.hidden {
      opacity: 0;
    }

    a {
      color: white;
    }
  }

  svg {
    position: absolute;
    bottom: 10px;
    right: 0;
    z-index: 30;
    transition: all 0.3s;

    &.hidden {
      opacity: 0;
    }

    path {
      fill: #300537;
    }
  }
</style>
