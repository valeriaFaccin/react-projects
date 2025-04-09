import styles from './Header.module.css';
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="">
                <img src={`/img/logo.png`} alt="CineTag Logo"></img>
            </Link>
            <nav>
                <HeaderLink url="./">Home</HeaderLink>
                <HeaderLink url="./Favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    )
}

export default Header;
