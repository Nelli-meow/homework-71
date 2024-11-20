import {createSlice} from '@reduxjs/toolkit';

interface OrderState {
  orders: [];
}

const initialState: OrderState = {
  orders: [],
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOneDish: (state, {}) => {

    }
  }
});

export const orderReducer = orderSlice.reducer;