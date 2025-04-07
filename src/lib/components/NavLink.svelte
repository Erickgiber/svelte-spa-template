<script lang="ts">
  import { Link } from 'svelte-routing'
  import type { GetPropsParams } from 'types/props-anchor.types'

  let { to, replace, className, ...others } = $props<{
    to: string
    replace: boolean
    className: string,
  }>()

  let active: boolean = $state(false)

  const currentProps = (props: GetPropsParams): any => {
    active = props.isCurrent
  }
</script>

<Link
  class={`link ${active ? 'active' : ''} ${className}`}
  {to}
  {replace}
  {...others}
  getProps={currentProps}
>
  {@render others.children()}
</Link>
