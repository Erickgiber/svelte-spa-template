<script lang="ts">
  import IconGithub from './IconGithub.svelte'
</script>

<header
  class="h-[var(--header-height)] p-2.5 px-5 bg-[rgba(32,1,46,0.11)] flex items-center justify-between"
>
  <a
    class="link-repo w-max text-white no-underline flex items-center justify-center gap-0.5 transition-all duration-100 hover:scale-95"
    href="https://github.com/Erickgiber/svelte-spa-template"
  >
    <IconGithub />
    <span>Github</span>
  </a>
</header>
