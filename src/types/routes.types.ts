export type TypeRouteProps = {
  title: string
  [key: string]: any
}

export type TypeRoute = {
  path: string
  component: any
  private: boolean
  props: TypeRouteProps
  children?: TypeRoute[]
}
