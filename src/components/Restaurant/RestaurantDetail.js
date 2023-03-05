import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import { CLOUDINARY_URL, RESTAURANT_DETAIL_URL } from "../../utils/constants";
import Shimmer from "../Common/Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart/cartSlice";

const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({});
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart);

  const getData = async () => {
    const data = await fetch(`${RESTAURANT_DETAIL_URL}&menuId=${id}`);
    const res = await data.json();
    setData(res?.data);
    setMenu([...Object.values(res?.data?.menu?.items)]);
  };

  useEffect(() => {
    getData();
  }, []);

  const history = useNavigate();

  const clearCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="container">
      <button className="btn-orange p-1" onClick={() => history(-1)}>
        {" "}
        {`<`} Back
      </button>
      <div className={styles.restaurantDetail}>
        {JSON.stringify(data) === "{}" ? (
          <Shimmer size={1} />
        ) : (
          <>
            <h1 className="text-xl mb-2">{data?.name}</h1>
            <div className={styles.info}>
              <div>
                <img
                  className="img-res"
                  src={CLOUDINARY_URL + `${data?.cloudinaryImageId}`}
                />
                <div className="pt-3">
                  <p>
                    Address : <span>{data?.locality}</span>
                  </p>
                  <p>
                    Cost: <span>{data?.costForTwoMsg}</span>
                  </p>
                  <p>
                    Cuisine: <span>{data?.cuisines?.join(", ")}</span>
                  </p>
                  <p></p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.menu}>
                  <ul>
                    {menu.length === 0 && <p>Menu not available</p>}
                    {menu?.map((item) => (
                      <li key={item.id}>
                        <div className="align-items-center d-flex justify-content-start p-2 pl-0">
                          {item?.cloudinaryImageId && (
                            <img
                              src={`${CLOUDINARY_URL}${item?.cloudinaryImageId}`}
                              alt="rest"
                              className={styles.smallImage}
                            />
                          )}
                          <p className="mx-3 p-0">
                            {item.name} - Rs.
                            <b>{Math.round(item.price / 100)}</b>
                            <br />
                            {item?.description}
                          </p>

                          {cart?.some((i) => i.id === item.id) && (
                            <button
                              className="btn-orange p-2 ms-auto me-2"
                              onClick={() => clearCart(item)}
                            >
                              Remove
                            </button>
                          )}
                          {cart?.find((i) => i.id === item.id)?.qty}
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
