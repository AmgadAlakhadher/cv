import { lazyRetry } from "shared/lib/lazyRetry/lazyWithRetry";
export const MainPageasync = lazyRetry(()=> import('./MainPage'));