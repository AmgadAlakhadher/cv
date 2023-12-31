import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routesConfig } from '../config/routeConfig';
import { AppRoutesProps } from 'shared/types/router';
// import { LoaderPage } from 'widgets/LoaderPage';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<>loading </>}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
