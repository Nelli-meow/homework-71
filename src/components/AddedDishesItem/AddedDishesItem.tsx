import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { Link } from 'react-router-dom';

const AddedDishesItem = () => {
  const dishes = useSelector((state: RootState) => state.addedOrders.orders);

  return (
    <div className="container d-flex flex-column">
      {dishes.map((dish) => (
        <div key={dish.id} className="">
          <div
            className="d-flex justify-content-sm-between align-items-center border border-2 rounded-md shadow-sm p-4 mb-5">
            <img src={dish.image} alt={dish.title} className="card-img-top" style={{width: "100px"}}/>
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title ms-2">{dish.title}</h5>
              <p className="card-text">Price: {dish.price} KGS</p>
              <Link to="/edit-dish" className="btn btn-warning">Edit</Link>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedDishesItem;