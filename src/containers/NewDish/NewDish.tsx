import OrderForm from '../../components/OrderForm/OrderForm.tsx';
import axiosAPI from '../../axiosAPI.ts';
import { useNavigate } from 'react-router-dom';
import { IOrderAPI } from '../../types';


const NewDish = () => {
  const navigate = useNavigate();

  const addNewDish = async (dish: IOrderAPI) => {
    try {
      await axiosAPI.post('dishes.json', dish);
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  return (
    <div>
      <OrderForm  addNewDish={addNewDish}/>
    </div>
  );
};

export default NewDish;