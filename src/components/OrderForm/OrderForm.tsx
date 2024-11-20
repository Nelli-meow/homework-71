
const OrderForm = () => {

  return (
    <>
      <div className="container mt-5">
        <h3 className="my-5">Add new dish</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" min={1}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Dish image</label>
            <input className="form-control"/>
            <img src="https://i.pinimg.com/736x/93/37/a7/9337a732ce6ec4d548c10828811b9f4d.jpg" alt="Dish image"
                 className="mt-3"
                 width="200"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;