import styles from "./postModel.module.css";

const PostModel = ({cover_picture, title, children}) => {
    return (
        <article className={styles.post_model_container} >
            <div className={styles.cover_picture} style={{ backgroundImage: `url(${cover_picture})`, backgroundPosition: "center" }}></div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.post_content_container}>{children}</div>
        </article>
    );
}

export default PostModel;
