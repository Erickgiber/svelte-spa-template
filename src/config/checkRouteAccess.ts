import { navigate } from 'svelte-routing';
import { appRoutes } from './app.routes';
import type { User } from 'types/user.types';

export const checkRouteAccess = (user: User, currentRoute: string) => {
  const route = appRoutes.find((route) => route.path === currentRoute);

  if (route) {
    if (!user && route.private && route.path !== '/login') {
      navigate('/login');
    } else if (user && !route.private) {
      navigate('/');
    }
  }
};
