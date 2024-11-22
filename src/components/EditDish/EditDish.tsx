import OrderForm from '../OrderForm/OrderForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editDish, fetchOneDish } from '../../store/thunks/dishesThunk.ts';
import { IOrderAPI } from '../../types';

const EditDish = () => {
  const {id} = useParams() as {id: string};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDishById = useCallback(async () => {
    if(id) {
      dispatch(fetchOneDish(id));
    }
  },[id])

  useEffect(() => {
    void getDishById();
    dispatch(fetchOneDish(id));

  }, [dispatch, id, getDishById]);

  const onSubmit = async (dish: IOrderAPI) => {
    await dispatch(editDish({id, dish}));
    navigate('/admin');
  };

  return (
    <>
      <OrderForm addNewDish={onSubmit}/>
    </>
  );
};

export default EditDish;
