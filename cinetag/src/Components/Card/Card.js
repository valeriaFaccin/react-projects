import styles from "./Card.module.css";
import favorite_heart from "./favorite.png";
import favorite_outline from "./favorite_outline.png";
import { Link } from 'react-router-dom';
import { useFavoriteContext } from "../../contexts/Favorites";

const Card = ({ id, title, cover }) => {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? favorite_heart : favorite_outline;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cover} alt={title} className={styles.cover}/>
                <h2>{title}</h2>
            </Link>

            <img src={icon}
                 alt="Favorite movie"
                 className={styles.favorite}
                 onClick={() => {
                     addFavorite({id, title, cover})
                 }}/>
        </div>
    );
}

export default Card;
