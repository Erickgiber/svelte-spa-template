<script lang="ts">
  import { Link } from 'svelte-routing'
  import type { GetPropsParams } from 'types/props-anchor.types'

  export let to: string
  export let replace: boolean = false
  export let className: string = ''
  let active: boolean = false

  const props = (props: GetPropsParams): any => {
    active = props.isCurrent
  }
</script>

<Link
  class={`link ${active ? 'active' : ''} ${className}`}
  {to}
  {replace}
  {...$$props}
  getProps={props}
>
  <slot />
</Link>
