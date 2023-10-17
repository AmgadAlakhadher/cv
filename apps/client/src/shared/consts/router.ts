export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  PROJECTS = 'projects',
  // last
  NOTFOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getNotFound = () => '/404';
export const getRouteProjects = () => '/projects';
export const getRouteLogin = () => '/login';

