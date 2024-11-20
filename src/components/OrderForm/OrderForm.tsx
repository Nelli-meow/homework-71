import { useCallback, useState } from 'react';
import { IOrder } from '../../types';
import * as React from 'react';
import axiosAPI from '../../axiosAPI.ts';

const initialState = {
  title: '',
  price: 1,
  image: '',
}

const OrderForm = () => {
  const [orders, setOrders] = useState<IOrder>({...initialState});

  const onChangeField = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOrders((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (orders.title.length === 0 || orders.price === 0 || orders.image.length === 0) {
      alert('Dont leave fields empty');
    } else {
      try {
        const res = await axiosAPI.post('dishes.json', {...orders});

        setOrders({...res.data});
        setOrders({...initialState});
      } catch (error) {
        console.error( error);
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="my-5">Add new dish</h3>
        <form onSubmit={onSubmitForm}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={orders.title}
              name="title"
              onChange={onChangeField}
              className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              value={orders.price}
              name="price"
              type="number"
              onChange={onChangeField}
              className="form-control" min={1}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Dish image</label>
            <input
              value={orders.image}
              name="image"
              onChange={onChangeField}
              className="form-control"/>
            {orders.image && <img src={orders.image} alt="Dish image" className="mt-3 " width="200"/>}
          </div>
          <button type="submit" className="btn btn-outline-warning">Add</button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;