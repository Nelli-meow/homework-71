import * as React from 'react';
import { RootState } from '../../app/store';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCallback, useEffect } from 'react';
import { deleteDish, fetchAllDishesThunk } from '../../store/thunks/dishesThunk';

const AddedDishesItem: React.FC = () => {
  const dishes = useAppSelector((state: RootState) => state.addedOrders.orders);
  const dispatch = useAppDispatch();

  const fetchDishes = useCallback(() => {
    dispatch(fetchAllDishesThunk());
  }, [dispatch]);


  const deleteOneDish = useCallback(
    async (id: string) => {
      await dispatch(deleteDish(id));
      fetchDishes();
    },
    [dispatch, fetchDishes]
  );

  return (
    <div className="container d-flex flex-column">
      {dishes.map((dish) => (
        <div key={dish.id}>
          <div className="d-flex justify-content-sm-between align-items-center border border-2 rounded-md shadow-sm p-4 mb-5">
            <img
              src={dish.image}
              alt={dish.title}
              className="card-img-top"
              style={{ width: "100px" }}
            />
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title ms-2">{dish.title}</h5>
              <p className="card-text">Price: {dish.price} KGS</p>
              <Link
                to={`/admin/dishes/${dish.id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteOneDish(dish.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedDishesItem;