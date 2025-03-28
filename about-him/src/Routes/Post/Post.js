import styles from "./post.module.css";
import {useParams} from "react-router";
import posts from "../../json/posts.json";
import PostModel from "../../Components/PostModel/PostModel";
import Markdown from "react-markdown";

const Post = () => {
    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    if(!post) {
        return <h1 style={{padding: "50px"}}>Apologies, citizen! It seems you've wandered into a restricted area. Nothing to see here—certainly no foiled evil plans. Chirp chirp.</h1>
    }

    return (
        <PostModel title={post.title} cover_picture={`/assets/posts/${post.id}/cover.png`}>
            <div className={styles.post_markdown_container}>
                <Markdown>
                    {post.text}
                </Markdown>
            </div>
        </PostModel>
    );
}

export default Post;
