import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IProjectSchema, IProject_add } from '../types/projectTypes';
import { ThunkConfig } from 'app/providers/StorProvider';
import { getProject } from '../selectors/getState';

export const addProductReq = createAsyncThunk<
  IProject_add,
  void,
  ThunkConfig<string>
>(
  '/products/add_product',
  async (_, { extra, rejectWithValue,getState,dispatch }) => {
    const product = getProject(getState());
    // const product_ = {name: product.name,barcode: product.barcode,description: product.description,color: product.color,size: product.size};
    // if(!product.name || !product.barcode) return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    try {
        const response = await extra.api.post<IProject_add>('/products',{...product});
        return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);

export const casesAddProjectReq = (builder:ActionReducerMapBuilder<IProjectSchema>)=>{
  builder.addCase(addProductReq.pending, (state)=>{
    state.isLoading = true;
    state.error = undefined;
  });
  builder.addCase(addProductReq.fulfilled,(state)=>{
      state.success = true;
      state.isLoading = false;
      state.error = undefined;
  });
  builder.addCase(addProductReq.rejected, (state,{payload}) => {
      state.isLoading = false;
      state.error =  payload;
  });
}