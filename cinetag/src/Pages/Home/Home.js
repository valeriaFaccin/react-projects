import styles from "./Home.module.css";
import Banner from "../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import movies from "../../json/db.json";

const Home = () => {
    return (
        <>
            <Banner image={"home"} />
            <Title>
                <h1>A place to keep your movies and videos!</h1>
            </Title>
            <section className={styles.container}>
                {movies.map((movie) => {
                    return <Card {...movie} key={movie.id}/>
                })}
            </section>
        </>
    );
}

export default Home;
