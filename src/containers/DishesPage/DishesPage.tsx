import { Link } from 'react-router-dom';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchAllDishesThunk } from '../../store/thunks/dishesThunk.ts';
import { useEffect } from 'react';
import AddedDishesItem from '../../components/AddedDishesItem/AddedDishesItem.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';

const DishesPage = () => {
  const dispatch = useAppDispatch();
  const dishes = useSelector((state: RootState) => state.addedOrders.orders);

  useEffect(() => {
    dispatch(fetchAllDishesThunk());
  }, [dispatch]);

  return (
    <>
      <div className="container px-5 mt-5 d-flex justify-content-sm-between align-items-center">
        <h3>Dishes</h3>
        <Link to="/admin/dishes/add-new-dish" className="btn btn-outline-warning">Add new Dish</Link>
      </div>
      <div className="container mt-5">
        {dishes.length === 0 ? (
          <p>No dishes.</p>
        ) : (
         <AddedDishesItem/>
        )}
      </div>
    </>
  );
};

export default DishesPage;