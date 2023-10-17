import { lazyRetry } from "shared/lib/lazyRetry/lazyWithRetry";
export const ProjectsPageAsync = lazyRetry(()=> import('./ProjectsPage'));