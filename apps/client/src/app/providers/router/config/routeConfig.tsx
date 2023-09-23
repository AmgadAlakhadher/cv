import {ErrorPage} from 'pages/errorPage/';
import { LoginPage } from 'pages/loginPage';
import { MainPage } from 'pages/mainPage';
import { CustomerPage } from 'pages/customerPage';
import { CustomersPage } from 'pages/customersPage';
import { ManagerMainPage } from 'pages/manager/mainPage';
import { ProductsPage } from 'pages/productsPage';
import EditRequestPage from 'pages/requestEditPage/ui/EditRequestPage';
import { RequestsPage } from 'pages/requestsPage';
import {WorkerMainPage} from 'pages/worker/mainPage';
import { WorkerRequestPage } from 'pages/worker/requestPage';
import { WorkerRequestsPage } from 'pages/worker/requestsPage';
import { 
  AppRoutes, 
  getRouteMain, 
  getRouteLogin, 
  getRouteCustomers,
  getRouteCustomer,
  getRouteWorker, 
  getRouteWorkerRequests,
  getRouteWorkerRequest,
  getRouteManager,
  getRouteRequests,
  getRouteEditRequest,
  getRouteProducts,
  getRouteAdmin
} from 'shared/consts/router';
import { AppRoutesProps } from 'shared/types/router';
import { AdminMainPage } from 'pages/admin/mainPage';

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
  [AppRoutes.REQUESTS_PAGE]:{
    authOnly: true,
    element: <RequestsPage />,
    path: getRouteRequests(),
  },
  [AppRoutes.EDIT_REQUESTS_PAGE]:{
    authOnly: true,
    element: <EditRequestPage />,
    path: getRouteEditRequest(':id'),
  },
  [AppRoutes.PRODUCTS_PAGE]:{
    authOnly: false,
    element: <ProductsPage />,
    path: getRouteProducts(),
  },
  [AppRoutes.CUSTOMER_PAGE]:{
    authOnly: true,
    element: <CustomerPage />,
    path: getRouteCustomer(':id'),
  },
  [AppRoutes.CUSTOMERS_PAGE]:{
    authOnly: true,
    element: <CustomersPage />,
    path: getRouteCustomers(),
  },
  //worker
  [AppRoutes.WORKER_MAIN_PAGE]:{
    authOnly: true,
    element: <WorkerMainPage />,
    path: getRouteWorker(),
  },
  [AppRoutes.WORKER_REQUESTS_PAGE]:{
    authOnly: true,
    element: <WorkerRequestsPage />,
    path: getRouteWorkerRequests(),
  },
  [AppRoutes.WORKER_REQUEST_PAGE]:{
    authOnly: true,
    element: <WorkerRequestPage />,
    path: getRouteWorkerRequest(':id'),
  },
  //manager
  [AppRoutes.MANAGER_MAIN_PAGE]:{
    authOnly: true,
    element: <ManagerMainPage />,
    path: getRouteManager(),
  },
  //manager
  [AppRoutes.ADMIN_MAIN_PAGE]:{
    authOnly: true,
    element: <AdminMainPage />,
    path: getRouteAdmin(),
  },
  // last
  [AppRoutes.NOTFOUND]: {
    element: <ErrorPage />,
    path: '*',
  },
};
