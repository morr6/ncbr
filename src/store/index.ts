import { configureStore } from '@reduxjs/toolkit';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState
) => ReturnType;

export default store;
