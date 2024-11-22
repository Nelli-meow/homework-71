import {createSlice} from '@reduxjs/toolkit';
import { fetchAllDishesThunk } from '../thunks/dishesThunk.ts';

interface OrderState {
  orders: [];
  isAdded: boolean;
}

const initialState: OrderState = {
  orders: [],
  isAdded: false,
}

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
        state.isAdded = true;
      })
      .addCase(fetchAllDishesThunk.fulfilled, (state, action ) => {
        state.orders = action.payload || [];
        state.isAdded = false;
      })
      .addCase(fetchAllDishesThunk.rejected, (state) => {
        state.isAdded = false;
      })
  }
});

export const orderReducer = orderSlice.reducer;