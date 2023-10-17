import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IProjectSchema } from '../types/projectTypes';
import { ThunkConfig } from 'app/providers/StorProvider';
// import { getProjectId } from '../selectors/getState';


export const deleteProjectReq = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  '/projects/delete_project',
  async (_, { extra, rejectWithValue,getState,dispatch }) => {
    // const id = getProjectId(getState());
    // if(!id) rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    try {
        const response = await extra.api.delete<void>(`/projects/${"id"}`);
        return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);

export const casesDeleteProjectReq = (builder:ActionReducerMapBuilder<IProjectSchema>) =>{
  builder.addCase(deleteProjectReq.pending, (state)=>{
    state.isLoading = true;
    state.error = undefined;
  });
  builder.addCase(deleteProjectReq.fulfilled,(state)=>{
      state.isLoading = false;
      state.error = undefined;
  });
  builder.addCase(deleteProjectReq.rejected, (state) => {
      state.isLoading = false;
      state.error =  'An error.';
  });
}