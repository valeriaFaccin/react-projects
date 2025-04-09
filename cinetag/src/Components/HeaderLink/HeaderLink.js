import styles from './HeaderLink.module.css';
import { Link } from 'react-router-dom';

function HeaderLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink;
