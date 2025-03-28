import styles from "./navLink.module.css";
import {Link, useLocation} from "react-router";

const NavLink = ({ children, toGo }) => {
    const location = useLocation();

    const classes = {
        first: styles.link,
        second: (location.pathname === toGo ? styles.link_underline : '')
    }

    return (
        <Link className={`${classes.first} ${classes.second}`}
              to={toGo}
        >{ children }</Link>
    );
}

export default NavLink;
