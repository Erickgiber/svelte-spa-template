export type RouteLocation = {
  pathname: string
  search: string
  hash?: string
  state: {
    [k in string | number]: unknown
  }
}

export type GetPropsParams = {
  location: RouteLocation
  href: string
  isPartiallyCurrent: boolean
  isCurrent: boolean
}
