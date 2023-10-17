import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProjectSchema } from "../types/projectTypes";
import { casesAddProjectReq } from "../services/addProjectReq";
import { casesDeleteProjectReq } from "../services/deleteProjectReq";
import { casesGetProjectsReq } from "../services/getProjectsReq";
import { casesGetProjectReq } from "../services/getProjectReq";
import { casesUpdateProjectReq } from "../services/updateProjectReq";

const initialState: IProjectSchema = {
    isLoading: false,
    projects: [],
    project: {
        id: "",
        title: "",
        desc: "",
        urlImg: "",
        gitUrl: "",
        previewUrl: "",
        tags: []
    },
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{ 
        // reducers add and update project
        setProjectId: (state,{payload}:PayloadAction<string>) =>{
            state.project.id = payload;
        },
        setTitle: (state,{payload}:PayloadAction<string>) =>{
            state.project.title = payload;
        },
        setDesc: (state,{payload}:PayloadAction<string>) =>{
            state.project.desc = payload;
        },
        setUrlImg: (state,{payload}:PayloadAction<string>) =>{
            state.project.urlImg = payload;
        },
        setGitUrl:(state,{payload}:PayloadAction<string>) =>{
            state.project.gitUrl = payload;
        },
        setPerviewUrl:(state,{payload}:PayloadAction<string>) =>{
            state.project.previewUrl = payload;
        },
        setTags: (state,{payload}:PayloadAction) => {
            // state.project.tags = [...state.tags,payload];
        },
        setCleanProject: (state) =>{
            state.project = {
                id: "",
                title: "",
                desc: "",
                urlImg: "",
                gitUrl: "",
                previewUrl: "",
                tags: []
            };
        },
        setSuccess: (state) => {
            state.success = !state.success;
        },
        resetError: (state) => {
            state.error = undefined;
        }
    },
    extraReducers: 
    (builder) =>{
        casesAddProjectReq(builder);
        casesGetProjectReq(builder);
        casesGetProjectsReq(builder);
        casesDeleteProjectReq(builder);
        casesUpdateProjectReq(builder);
    },
});

export const { actions: projectActions } = projectSlice;
export const { reducer: projectReducer } = projectSlice;