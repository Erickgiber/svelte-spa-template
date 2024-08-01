<script lang="ts">
  import { Link } from 'svelte-routing'
  import type { GetPropsParams } from 'types/props-anchor.types'

  export let to: string
  export let replace: boolean = false
  let active: boolean = false
  let activeClass = active ? 'link active' : 'link inactive'

  const props = (props: GetPropsParams): any => {
    active = props.isCurrent
    activeClass = active ? 'link active' : 'link inactive'
  }
</script>

<Link class={activeClass} {to} {replace} {...$$props} getProps={props}>
  <slot />
</Link>
