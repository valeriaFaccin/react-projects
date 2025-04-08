import styles from "./Card.module.css";

const Card = ({ id, title, cover }) => {
    const icon = `/img/favorite_outline.png`;

    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover}/>
            <h2>{title}</h2>
            <img src={icon}
                 alt="To favorite a movie"
                 className={styles.favorite}
            />
        </div>
    );
}

export default Card;
