import styles from "./postCard.module.css";
import {Link} from "react-router";
import Button from "../Button/Button";

const PostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cover} src={`/assets/posts/${post.id}/cover.png`} alt={"PostCard cover"}/>
                <h2 className={styles.title}>{post.title}</h2>
                <Button>Read</Button>
            </div>
        </Link>
    );
}

export default PostCard;
