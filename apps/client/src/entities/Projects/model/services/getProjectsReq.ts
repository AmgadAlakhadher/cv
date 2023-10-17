import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IProjectSchema, IProject } from '../types/projectTypes';
import { ThunkConfig } from 'app/providers/StorProvider';


export const getProjectsReq = createAsyncThunk<
  IProject[],
  void,
  ThunkConfig<string>
>(
  '/Projects/get_Projects',
  async (_,{ extra, rejectWithValue,dispatch }) => {
    try {
        const response = await extra.api.get<IProject[]>('/projects');
        return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);

export const casesGetProjectsReq = (builder:ActionReducerMapBuilder<IProjectSchema>)=>{
  builder.addCase(getProjectsReq.pending, (state)=>{
    state.isLoading = true;
    state.error = undefined;
  });
  builder.addCase(getProjectsReq.fulfilled,(state,{payload}:PayloadAction<IProject[]>)=>{
      state.projects = payload;
      state.isLoading = false;
      state.error = undefined;
  });
  builder.addCase(getProjectsReq.rejected, (state) => {
      state.isLoading = false;
      state.error =  'An error.';
  });
}