import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteDish, fetchAllDishesThunk, fetchOneDish } from '../thunks/dishesThunk.ts';
import { IOrderAPI } from '../../types';
import { RootState } from '../../app/store.ts';

interface OrderState {
  orders: [];
  isFetchLoading: boolean;
  isDeletedLoading: boolean;
  updateLoading: boolean,
  oneDish: null | IOrderAPI;
}

const initialState: OrderState = {
  orders: [],
  isFetchLoading: false,
  isDeletedLoading: false,
  updateLoading: false,
  oneDish: null,
}

export const selectOneDish = (state: RootState) => state.orders.oneDish;
export const selectFetchingDishes = (state: RootState) => state.orders.isFetchLoading;

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOneDish: (state, {}) => {

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDishesThunk.pending, (state) => {
        state.isFetchLoading = true;
      })
      .addCase(fetchAllDishesThunk.fulfilled, (state, action ) => {
        state.orders = action.payload || [];
        state.isFetchLoading = false;
      })
      .addCase(fetchAllDishesThunk.rejected, (state) => {
        state.isFetchLoading = false;
      })
      .addCase(deleteDish.pending, (state) => {
        state.isDeletedLoading = true;
      })
      .addCase(deleteDish.fulfilled, (state ) => {
        state.isDeletedLoading = false;
      })
      .addCase(deleteDish.rejected, (state) => {
        state.isDeletedLoading = false;
      })
      .addCase(fetchOneDish.pending, (state) => {
        state.isFetchLoading = true;
        state.oneDish = null;
      })
      .addCase(fetchOneDish.fulfilled, (state, action: PayloadAction<IOrderAPI | null> ) => {
        state.isFetchLoading = false;
        state.oneDish = action.payload;
      })
      .addCase(fetchOneDish.rejected, (state) => {
        state.isFetchLoading = false;
      })
  }
});

export const orderReducer = orderSlice.reducer;