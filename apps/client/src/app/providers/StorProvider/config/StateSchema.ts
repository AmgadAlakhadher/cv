import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  Store,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { createReducerManager } from './reducerManager';
import { rtkApi } from 'shared/api/rtkApi';
import { SessionSchema } from 'entites/Session';
import { RequestSchema } from 'entites/Request/';
// import { AllRequestsSchema } from 'entites/AllRequests/';
import { CustomerSchema } from 'entites/Customer';
import { ProductSchema } from 'entites/Product';
import { OptionalRecord } from 'app/types/global';
import { DarkModeSchema } from 'entites/DarkMode';

export interface StateSchema {
  session: SessionSchema;
  request: RequestSchema;
  customer: CustomerSchema;
  product:ProductSchema;
  darkMode: DarkModeSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type TStore = {
  reducerManager: ReturnType<typeof createReducerManager>;
} & Store;
