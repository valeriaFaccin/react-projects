import styles from "./Banner.module.css";

const Banner = ({ image }) => {
    return (
        <div className={styles.cover} style={{ backgroundImage: `url('/img/banner-${image}.png')`}} >
            <img className={styles.cover} src={`back-banner-${image}.png`} alt={`${image} cover`} />
        </div>
    );
}

export default Banner;
