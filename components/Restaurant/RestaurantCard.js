import styles from './Restaurant.module.css'

const RestaurantCard = (props) => {
    return(
        <div className={styles.restaurantCard}>
            <div className={styles.imgHolder}>
            <img src={`https://res.cloudinary.com/swiggy/image/upload/${props.cloudinaryImageId}`} alt="rest"/>
            </div>
            <div className={styles.content}>
            <p className={styles.title}>{props.name}</p>
            <p className={styles.small}>{props.cuisines.join(', ')}</p>
            <p className={styles.rating}>{props.avgRating} stars</p>
            <p className={styles.price}>Cost for two : Rs.{props.costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard