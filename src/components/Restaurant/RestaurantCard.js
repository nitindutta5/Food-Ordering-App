import styles from './Restaurant.module.css'
import { Link } from 'react-router-dom'
import { CLOUDINARY_URL } from '../../utils/constants'

const RestaurantCard = (props) => {
    return(
        <div className={styles.restaurantCard}>
            <Link to={`/restaurant/${props.id}`}>
            <div className={styles.imgHolder}>
            <img src={`${CLOUDINARY_URL}${props.cloudinaryImageId}`} alt="rest"/>
            </div>
            <div className={styles.content}>
            <p className={styles.title}>{props.name}</p>
            <p className={styles.small}>{props.cuisines.join(', ')}</p>
            <p className={styles.rating}>{props.avgRating} stars</p>
            <p className={styles.price}>{props.costForTwoString}</p>
            </div>
            </Link>
        </div>
    )
}

export default RestaurantCard
