import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div className="container">
      <h1>Cart</h1>
      {cart?.length === 0 ? (
        <>
          <h3 className="mb-4">Looks like your cart is empty.</h3>
          <p className="mb-2">We know you must be hungry.......</p>
          <button className="btn-orange" onClick={() => navigate("/")}>
            Grab some food
          </button>
        </>
      ) : (
        <>
          <ul>
            {cart?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
