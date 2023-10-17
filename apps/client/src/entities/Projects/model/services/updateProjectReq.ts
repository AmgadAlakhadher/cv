import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StorProvider';
import { IProjectSchema } from '../types/projectTypes';
import { getProject } from '../selectors/getState';

export const updateprojectReq = createAsyncThunk<
  void,
  string,
  ThunkConfig<string>
>(
  'update/project',
  async (id, { extra, rejectWithValue, getState, dispatch }) => {
    const project = getProject(getState());
    // const project_ = {
    //   name: project.name,
    //   barcode: project.barcode,
    //   description: project.description,
    //   color: project.color,
    //   size: project.size 
    // };
    // const id = getprojectId(getState());
    if(!id) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
    try {
      const response = await extra.api.patch<void>(`/projects/${id}`, project);
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);

export const casesUpdateProjectReq = (builder:ActionReducerMapBuilder<IProjectSchema>)=>{
  builder.addCase(updateprojectReq.pending, (state)=>{
    state.isLoading = true;
    state.error = undefined;
  });
  builder.addCase(updateprojectReq.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.error = undefined;
  });
  builder.addCase(updateprojectReq.rejected, (state) => {
      state.isLoading = false;
      state.error =  'An error.';
  });
}