import {
  AnyAction,
  CombinedState,
  configureStore,
  PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { darkModeReducer } from '../../../../entities/DarkMode'
import { StateSchema, ThunkExtraArg, TStore } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from 'shared/api/rtkApi';
import { $api } from 'shared/api/api';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import { sessionReducer } from '../../../../entities/Session';
import { projectReducer } from '../../../../entities/Projects';

export function createReduxStore(
  initialState?: PreloadedState<CombinedState<NoInfer<StateSchema>>>,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    darkMode: darkModeReducer,
    session: sessionReducer,
    project: projectReducer,
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
