import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import { CLOUDINARY_URL } from "../../utils/constants";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.677106134761935&lng=77.48572502285242&menuId=${id}`
    );
    const res = await data.json();
    setData(res?.data);
    setMenu([...Object.values(res?.data?.menu?.items)]);
  };
  const history = useNavigate();
  return (
    <div className="container">
      <button className="btn" onClick={() => history(-1)}>
        {" "}
        {`<`} Back
      </button>
      <div className={styles.restaurantDetail}>
        {JSON.stringify(data) === "{}" ? (
          <Shimmer size={1} />
        ) : (
          <>
            <h2>{data?.name}</h2>
            <div className={styles.info}>
              <img
                className="img-res"
                src={CLOUDINARY_URL + `${data?.cloudinaryImageId}`}
              />
              <div className={styles.right}>
                <p>
                  Address :{" "}
                  <span>
                    {data?.area}, {data?.locality}
                  </span>
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
            <div className={styles.menu}>
              <h3>Menu</h3>
              <ul>
                {menu.length ===0 && <p>Menu not available</p> }
                  {menu?.map((item) => (
                  <li key={item.id}>
                    {item.name} - Rs.<b>{Math.round(item.price / 100)}</b>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
