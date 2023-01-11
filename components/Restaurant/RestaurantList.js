import { restaurants } from "../../data";
import RestaurantCard from "./RestaurantCard";
import styles from './Restaurant.module.css'

const RestaurantList = () => {
  return (
    <div className={styles.restaurantHolder + ` container`}>
      {restaurants.map((item) => (
        <RestaurantCard key={item.data.uuid} {...item.data}/>
      ))}
    </div>
  );
};

export default RestaurantList;
