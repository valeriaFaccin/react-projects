import styles from "./Player.module.css";
import Banner from "Components/Banner/Banner";
import Title from "Components/Title/Title";
import NotFound from "../NotFound/NotFound";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Player = () => {
    const [video, setVideo] = useState();
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVideo(...data)
            });
    }, [params.id]);

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    );
}

export default Player;
