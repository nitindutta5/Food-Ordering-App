import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../Restaurant/Restaurant.module.css";
import { CLOUDINARY_URL } from "../../utils/constants";
import { addToCart, removeFromCart } from "../../store/slices/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = cart?.reduce((acc, curr) => {
    acc = curr.qty * Math.round(curr.price / 100);
    return acc;
  }, 0);

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
          <div className={styles.menu}>
            <ul>
              {cart?.map((item) => (
                <li key={item.id}>
                  <div className="align-items-center d-flex justify-content-start p-2 pl-0">
                    {item?.cloudinaryImageId ? (
                      <img
                        src={`${CLOUDINARY_URL}${item?.cloudinaryImageId}`}
                        alt="rest"
                        className={styles.smallImage}
                      />
                    ) : (
                      <div className={styles.smallImage}>No Image</div>
                    )}
                    <p className="mx-3 p-0">
                      {item.name} - Rs.
                      <b>{Math.round(item.price / 100)}</b>
                      <br />
                      {item?.description}
                    </p>

                    {item?.qty >= 1 && (
                      <button
                        className="btn-orange p-2 ms-auto me-2"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </button>
                    )}
                    {item?.qty}
                    <button
                      className="btn-orange p-2 ms-2"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="d-flex justify-content-between">
              <b>Total</b>: <div>Rs.{total}</div>
            </p>
        </>
      )}
    </div>
  );
};

export default Cart;
