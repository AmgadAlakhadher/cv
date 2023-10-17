import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IProjectSchema, IProject } from '../types/projectTypes';
import { ThunkConfig } from 'app/providers/StorProvider';

export const getProjectReq = createAsyncThunk<
  IProject,
  string,
  ThunkConfig<string>
>(
  '/Projects/get_Project',
  async (id, { extra, rejectWithValue,getState,dispatch }) => {

    if(!id) return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    try {
        const response = await extra.api.get<IProject>(`/Projects/${id}`);
        return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);

export const casesGetProjectReq = (builder:ActionReducerMapBuilder<IProjectSchema>) =>{
  builder.addCase(getProjectReq.pending, (state)=>{
    state.isLoading = true;
    state.error = undefined;
  });
  builder.addCase(getProjectReq.fulfilled,(state,{payload}:PayloadAction<IProject>)=>{
      state.project = payload ;
      state.isLoading = false;
      state.error = undefined;
  });
  builder.addCase(getProjectReq.rejected, (state) => {
      state.isLoading = false;
      state.error =  'An error.';
  });
}