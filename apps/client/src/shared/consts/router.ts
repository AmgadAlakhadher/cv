export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REQUESTS_PAGE = 'requests_page',
  EDIT_REQUESTS_PAGE = 'edit_requests_page',
  PRODUCTS_PAGE = 'products_page',
  CUSTOMER_PAGE = 'customer_page',
  CUSTOMERS_PAGE = 'customers_page',
  //worker
  WORKER_MAIN_PAGE = 'worker_main_page',
  WORKER_REQUEST_PAGE = 'worker_request_page', 
  WORKER_REQUESTS_PAGE = 'worker_requests_page',
  //manager
  MANAGER_MAIN_PAGE = 'manager_main_page',
  //admin
  ADMIN_MAIN_PAGE = 'admin_main_page',
  // last
  NOTFOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getNotFound = () => '/404';
export const getRouteLogin = () => '/login';
export const getRouteRequests = () => '/requests';
export const getRouteEditRequest = (id:string) => `/requests/edit/${id}`;
export const getRouteProducts = () => '/products';
export const getRouteCustomer = (id:string) => `/customers/${id}`;
export const getRouteCustomers = () => '/customers';
//worker
export const getRouteWorker = () => '/worker/home';
export const getRouteWorkerRequest = (id:string) => `/worker/requests/${id}`;
export const getRouteWorkerRequests = () => '/worker/requests';
//manager
export const getRouteManager = () => '/manager/home';
//admin
export const getRouteAdmin = () => '/admin/home';