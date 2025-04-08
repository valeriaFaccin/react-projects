import styles from "./Card.module.css";

const Card = ({ id, title, cover }) => {
    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover}/>
            <h2>{title}</h2>
            <img src={`/img/favorite_outline.png`}
                 alt="To favorite a movie"
                 className={styles.favorite}/>
        </div>
    );
}

export default Card;
