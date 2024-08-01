export const appRoutes = [
  {
    path: "/login",
    component: () => import("$pages/public/Login.svelte"),
    private: false,
  },
  {
    path: "/",
    component: () => import("$pages/private/Dashboard.svelte"),
    private: true,
  },
];