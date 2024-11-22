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

export const fetchOneDish = createAsyncThunk<IOrderAPI | null, string>(
  'dishes/fetchOneDish',
  async (id) => {
    const response = await axiosAPI.get<IOrderAPI | null>('/dishes/' + id + '.json');
    const dish = response.data;


    if (dish === null) {
      throw new Error('Not found');
    }

    return dish;
  }
);

export const deleteDish = createAsyncThunk<void, string>(
  'dishes/deleteDish',
  async (id: string) => {
    await axiosAPI.delete(`dishes/${id}.json`);
  }
);

export const editDish = createAsyncThunk<void, { id: string; dish: IOrderAPI }>(
  'dishes/editDish',
  async ({ id, dish }) => {
    await axiosAPI.put(`dishes/${id}.json`, dish);
  }
);




