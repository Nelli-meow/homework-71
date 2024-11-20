import { Link } from 'react-router-dom';

const OrdersPage = () => {
  return (
    <div className="container px-5 mt-5 d-flex justify-content-sm-between align-items-center">
      <h3>Dishes</h3>
      <Link to="/admin/orders/add-new-dish" className="btn btn-outline-warning">Add new Dish</Link>
    </div>
  );
};

export default OrdersPage;