import styles from "./button.module.css";

const Button = ({ children, size }) => {
    return (
        <button className={`${styles.readBtn} ${styles[size]}`}>{children}</button>
    )
}

export default Button;
