import { restaurants } from "../../data";
import RestaurantCard from "./RestaurantCard";
import styles from "./Restaurant.module.css";
import { useState } from "react";

const RestaurantList = () => {
  const [filter, setFilter] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([
    ...restaurants,
  ]);
  const [loading, setLoading] = useState(false);
  const handleFilter = (e) => {
    setLoading(true);
    let val = e.target.value;
    setFilter(val);
    let filteredData = restaurants.filter((item) =>
      item.data.name.includes(val)
    );
    setFilteredRestaurants([...filteredData]);
    setLoading(false);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Search Restaurant"
        className={styles.textField}
      />
      <div className={styles.restaurantHolder}>
        {loading
          ? "Loading..."
          : filteredRestaurants.map((item) => (
              <RestaurantCard key={item.data.uuid} {...item.data} />
            ))}
      </div>
    </div>
  );
};

export default RestaurantList;
