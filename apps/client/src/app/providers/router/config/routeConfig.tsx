import {ErrorPage} from 'pages/errorPage/';
import { LoginPage } from 'pages/loginPage';
import { MainPage } from 'pages/mainPage';
import { 
  AppRoutes, 
  getRouteLogin, 
  getRouteMain, 
} from 'shared/consts/router';
import { AppRoutesProps } from 'shared/types/router';

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    authOnly: false,
    element: <MainPage />,
    path: getRouteMain(),
  },
  [AppRoutes.LOGIN]: {
    authOnly: false,
    element: <LoginPage />,
    path: getRouteLogin(),
  },
  // last
  [AppRoutes.NOTFOUND]: {
    element: <ErrorPage />,
    path: '*',
  },
};
