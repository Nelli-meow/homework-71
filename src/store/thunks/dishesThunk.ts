import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { IOrder, IOrderAPI } from '../../types';

export const fetchAllDishesThunk =  createAsyncThunk<IOrder[], void>(
  'dishes/fetchAllDishesThunk',
  async () => {
    const response : {data: IOrderAPI | null} = await axiosAPI('dishes.json');
    const dishesAll = response.data;


    if(dishesAll === null) {
      return [];
    }

    return Object.keys(dishesAll).map((key) => {
      const dishes = { ...dishesAll[key] };

      return {
        id: key,
        ...dishes,
      };
    });

  }
)