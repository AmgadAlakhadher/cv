import {
  AnyAction,
  CombinedState,
  configureStore,
  PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { NoInfer } from 'react-redux';
import { StateSchema, ThunkExtraArg, TStore } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from 'shared/api/rtkApi';
import { $api } from 'shared/api/api';
import { requestReducer } from 'entites/Request';
// import { allRequestsReducer } from 'entites/AllRequests'
import { sessionReducer } from 'entites/Session/model/slice/sessionSlice';
import { customerReducer } from 'entites/Customer'
import { productReducer } from 'entites/Product';
import { darkModeReducer } from 'entites/DarkMode';

export function createReduxStore(
  initialState?: PreloadedState<CombinedState<NoInfer<StateSchema>>>,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    session: sessionReducer, 
    request: requestReducer,
    customer: customerReducer,
    product: productReducer,
    darkMode: darkModeReducer,
    // last
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const extraArg: ThunkExtraArg = {
    api: $api,
  };
  const store = configureStore({
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
    preloadedState: initialState,
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
  }) as TStore;

  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;
