import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from '../store/slices/orderSlice.ts';

export const store = configureStore({
  reducer: {
    addedOrders: orderReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;