<script lang="ts">
  import exp from 'constants'
  import { Link } from 'svelte-routing'
  import type { GetPropsParams } from 'types/props-anchor.types'

  export let to: string
  export let replace: boolean = false
  export let className: string = ''
  let active: boolean = false
  let activeClass = active ? 'link active' : 'link inactive'

  const props = (props: GetPropsParams): any => {
    active = props.isCurrent
    activeClass = active ? 'link active' : 'link'
  }
</script>

<Link class={`${activeClass} ${className}`} {to} {replace} {...$$props} getProps={props}>
  <slot />
</Link>
