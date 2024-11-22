import { useState, useCallback, useEffect } from 'react';
import { IDishMutation } from '../../types';
import axiosAPI from '../../axiosAPI';
import * as React from 'react';

const initialState = {
  title: '',
  price: 1,
  image: '',
};

interface OrderFormProps {
  addNewDish: (dish: IDishMutation) => void;
  isEdit?: boolean;
}

const OrderForm: React.FC<OrderFormProps> = ({ addNewDish, isEdit }) => {
  const [newDish, setNewDish] = useState(initialState);


  const onChangeField = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewDish((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newDish.title || !newDish.price || !newDish.image) {
      alert('Don\'t leave fields empty');
    } else {
      try {
        addNewDish({ ...newDish });

        if (!isEdit) {
          setNewDish({ ...initialState });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h3>{isEdit ? 'Edit' : 'Add new'} dish</h3>
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={newDish.title}
            name="title"
            onChange={onChangeField}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            value={newDish.price}
            name="price"
            type="number"
            onChange={onChangeField}
            className="form-control"
            min={1}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dish image</label>
          <input
            value={newDish.image}
            name="image"
            onChange={onChangeField}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">{isEdit ? 'Save' : 'Add dish'}</button>
      </form>
    </div>
  );
};

export default OrderForm;
