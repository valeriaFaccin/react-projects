import styles from "./Title.module.css";

const Title = ({ children }) => {
    return (
        <div className={styles.text}>
            {children}
        </div>
    );
}

export default Title;
