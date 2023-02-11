import RestaurantCard from "./RestaurantCard";
import styles from "./Restaurant.module.css";
import { useContext, useState } from "react";
import Shimmer from "../Common/Shimmer";
import { useEffect } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filter, setFilter] = useState("");
  const [msg, setMsg] = useState("");
  // const {darkMode} = useContext(ThemeContext);

  async function getRestaurants() {
    await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.677106134761935&lng=77.48572502285242&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data?.data?.cards?.[2]?.data?.data?.cards);
        setFilteredRestaurants(data?.data?.cards?.[2]?.data?.data?.cards);
      });
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (filter.length === 0) {
      setMsg("");
      setFilteredRestaurants(restaurants);
    } else {
      handleFilter(filter);
    }
  }, [filter]);

  const handleFilter = (val) => {
    let filteredData = restaurants?.filter((item) =>
      item.data.name.toLowerCase().includes(val.toLowerCase())
    );
    if (filteredData.length === 0) {
      setMsg("No records found.");
    }
    setFilteredRestaurants([...filteredData]);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Restaurant"
        className={styles.textField}
      />
      <div className={styles.restaurantHolder}>
        {msg != "" && <h4>{msg}</h4>}
        {restaurants.length === 0 ? (
          <Shimmer size={5} />
        ) : (
          filteredRestaurants?.map((item) => (
            <RestaurantCard key={item.data.uuid} {...item.data} />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
