import styles from "./menu.module.css";
import NavLink from "../NavLink/NavLink";

const Menu = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink toGo={"/"} >Home</NavLink>
                <NavLink toGo={"/abouthim"} >About Me</NavLink>
            </nav>
        </header>
    );
}

export default Menu;
