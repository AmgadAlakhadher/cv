import { StateSchema } from "app/providers/StorProvider";

// export const getProductId = (state: StateSchema) => state.project;
export const getProject = (state: StateSchema) =>state.project.project;
export const getProjects = (state: StateSchema) =>state.project.projects;
export const getError = (state: StateSchema) =>state.project.error;
export const getSuccess = (state: StateSchema) =>state.project.success;