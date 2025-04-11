import styles from "./Home.module.css";
// import movies from "../../json/db.json";
import Banner from "../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(data)
            });
    }, []);

    return (
        <>
            <Banner image={"home"} />
            <Title>
                <h1>A place to keep your movies and videos!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    );
}

export default Home;
