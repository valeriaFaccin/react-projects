import styles from "./footer.module.css";
import { ReactComponent as Registered } from "../../assets/registered.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Registered />
            <p>Created by the most Genius Evil Scientist: <strong style={{color: "#1875E8"}}>Dr. Doofenshmirtz!</strong></p>
        </footer>
    );
}

export default Footer;
