import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>You lost yourself somewhere...</p>
        </section>
    );
}

export default NotFound;
